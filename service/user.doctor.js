const userDoctorModel = require('../models/user.doctor')
const jwt = require('jsonwebtoken')
const bcryptjs = require("bcryptjs")
module.exports.login = async (payload) => {
    try {
        let { email, password } = payload
        let isDoctor = await userDoctorModel.find({ email })

        if (isDoctor.length != 0) {
            let isValid = await bcryptjs.compare(password, isDoctor[0].password)
            if (isValid) {
                let token = jwt.sign({ _id: isDoctor[0]._id, email: isDoctor[0].email }, process.env.JWT_SECRET_KEY)
                return { token, status: 1 }
            }
            else {
                return { status: 0 }
            }
        }
        else {
            return { status: 0 }
        }

    } catch (error) {
        console.log(error)
    }
}

module.exports.singup = async (payload) => {

    try {
        let { password } = payload
        password = await bcryptjs.hash(password, 10)

        const doctor = new userDoctorModel({ ...payload, password })

        await doctor.save()
        return 1
    } catch (error) {
        console.log(error)
    }

}
module.exports.get = async ()=> {
    try{
      const doctor = await userDoctorModel.find()
      if(doctor.length!=0){
        return {data:doctor,status:1}
      }
      else{
        return {status:0}
      }
      }
      catch(error){
        
      }
    }
    

