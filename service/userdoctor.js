const jwt = require('jsonwebtoken')
const bcryptjs = require("bcryptjs")
const userModel = require('../models/user')
    
module.exports.get = async ()=> {
    try{
      // const doctor = await userDoctorModel.find()
      // if(doctor.length!=0){
      //   return {data:doctor,status:1}
      // }
      // else{
      //   return {status:0}
      // }
      }
      catch(error){
        
      }
    }
module.exports.getDashboard=async(payload)=>{
  try{
     let _id=payload
     console.log(_id)
     let response=await userModel.find({$and:[{_id},{role:1}]})
      return response
  }catch(err){

  }
}
    

