const userModel=require('../models/user')
const jwt=require('jsonwebtoken')
const bcryptjs=require("bcryptjs")
module.exports.login=async(payload)=>{
  try{ 
    let {email,password}=payload
    let isUser=await userModel.find({email})
    console.log(isUser)
    if(isUser.length!=0){
        let isValid=await bcryptjs.compare(password,isUser[0].password)
        if(isValid){
            let token=jwt.sign({_id:isUser[0]._id,email:isUser[0].email},process.env.JWT_SECRET_KEY)
            return {token,status:1}
        }
        else{
            return {status:0}
        }
    }
    else{
        return {status:0}
    }
      
  }  catch(error){
    console.log(error)
  }
}

module.exports.singup=async(payload)=>{

    try{ 
        let {password}=payload
    password=await bcryptjs.hash(password,10)

      const user=new userModel({...payload,password})

        await user.save()
        return 1
    }  catch(error){
        console.log(error)
    }
    
    
}