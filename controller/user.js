const user=require('../service/user')
module.exports.singup=async(req,res,next)=>{
   try{
     const payload=req.body;
     const response=await user.singup(payload);
     if(response){
       res.send({msg:"new user created"})
      }
      else{
        res.send({msg:"user not created"})
      }
   }catch(error){
  
   }
  }
module.exports.login=async(req,res,next)=>{
 try{
   const payload=req.body;
   const response=await user.login(payload);
   if(response.status){
    res.send({msg:"you are logged In",token:response.token})
   }
   else{
     res.send({msg:"username or password are incorrect"})
   }
  
 }catch(error){

 }
}