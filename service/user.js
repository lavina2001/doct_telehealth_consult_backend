const userModel = require('../models/user')
const jwt = require('jsonwebtoken')
const bcryptjs = require("bcryptjs")
const { ObjectId } = require('mongoose')
const specialityModel = require('../models/specialities')
module.exports.login = async (payload) => {
  try {
    console.log("payload>>>", payload);
    let { email, password, role } = payload
    // console.log(email,password,role)
    let isUser = await userModel.find({ $and: [{ email }, { role }] })

    if (isUser.length != 0) {
    
      let isValid = await bcryptjs.compare(password, isUser[0].password)
  
      if (isValid) {

        return { status: 1, user: isUser }
      }
      else {
        return { status: 0 }
      }
    }
    else {
      return { status: 0 }
    }

  } catch (error) {
    console.log("come in chatch>>>>",error.message)
  }
}

module.exports.singup = async (payload) => {

  try {
    console.log("singup>>>>", payload);
    let { password } = payload
    password = await bcryptjs.hash(password, 10)
    console.log("password>>>>", password);
    const user = new userModel({ ...payload, password })
    console.log("user>>>>>", user);
    user.token=jwt.sign({ _id:user._id, email: user.email }, process.env.JWT_SECRET_KEY)
    console.log("user.token>>>>", user.token);
    // await user.save()
    await user.save()
    console.log("user>>>>", user);
    return { status: 1, user }
  } catch (error) {
    console.log("come in chach>>>>>>>>>",error)
  }


}
module.exports.doctorSearch = async (payload) => {
  try {
    let doctorList=[]
    // let doctor = await userModel.find({ $and: [{ name: { $regex: payload, $options: "i" } }, { role: 1 }] }, { password: 0 })
    let doctor=await userModel.find({role:1})
   for (let index = 0; index < doctor.length; index++) {
     const element = doctor[index];
     console.log("the element",element);
     let speciality=await specialityModel.find({_id:element.speciality})
    console.log("@@@@@@@@@@speciality@@@@@@@",speciality);
     doctorList.push({speciality:speciality[0],doctor:element})
  
   }
  
    console.log("this is doctor",doctorList)
    if (doctorList.length != 0) {
      return doctorList
    }
  } catch (err) {
    console.log(err)
  }

}
module.exports.doctorProfile = async (doctorId) => {
  try {
    let doctor = await userModel.find({ _id: doctorId })
    // console.log('this is ',doctor)
    if (doctor[0].speciality !== undefined) {
      let speciality = await specialityModel.find({ _id: doctor[0].speciality })
      speciality = speciality[0]
      doctor = doctor[0]
      if (doctor.length != 0) {
        delete speciality._id
        return { doctor, speciality }
      }
    } else {
      return { doctor, speciality: [] }
    }
  } catch (err) {

  }
}
module.exports.booking = async (payload) => {
  try {
    let { userId, doctorId, date, time, diceases } = payload
    diceases = diceases.spilit(',')
    console.log({ userId, doctorId, date, time, diceases })
    let response = await userModel.updateOne({ _id: doctorId }, {
      $set: {
      
          $push: { appointment:{userId, date, time, diceases }}
        }
  
    })
    console.log("Drrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",response)
    return response
  } catch (err) {
console.log(error)
  }
}