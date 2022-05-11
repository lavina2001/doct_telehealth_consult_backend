
const Speciality=require('../models/specialities')
const userModel = require('../models/user')
module.exports.dashboard=async()=>{
    try{
     let doctor=await userModel.find({role:1})
     let patient=await userModel.find({role:0})
     return {doctor,doctorCount:doctor.length,patientCount:patient.length,patient}
    }catch(err){

    }
}

module.exports.addSpecelities=async(payload)=>{
    try{
      
        let {file,title}=payload
        let newSpeciality=new Speciality({title,picture:file})
        await newSpeciality.save()
        return 1  
        
    }catch(err){
        return 0
    }

}
module.exports.getSpecelities=async()=>{
    try{
       let data=await Speciality.find({})
       if(data.length!=0){
           return {status:1,data}
       }else{
           return {status:0}
       }
    }catch(err){

    }
}
module.exports.getSpecelities=async()=>{
    try{
       let data=await Speciality.find({})
       if(data.length!=0){
           return {status:1,data}
       }else{
           return {status:0}
       }
    }catch(err){

    }
}

module.exports.editSpecialities=async(payload)=>{
    try{
      let {id}=payload 
      delete payload.id
      payload.picture?'':delete payload.picture
      let response=await Speciality.updateOne({_id:id},{$set:{...payload}})
      if(response.modifiedCount){
          return 1
      }else{
          return 0
      }
    }catch(err){

    }
}
module.exports.getDoctor=async(role)=>{
    try{
      let response=await userModel.find({role})
  
      return response
    }catch(err){
    }
    
    }
    module.exports.getappointmentPage=async(role)=>{
    try{
      let response=await userModel.find({role})
  
      return response
    }catch(err){

    }
}