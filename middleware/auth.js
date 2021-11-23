const jwt=require("jsonwebtoken")
const jwt_decode=require("jwt-decode");
const userModel = require("../models/user");
const auth=(req,res)=>{
    const token=req.headers["authorization"]
    if (token) {
        const bearer = token.split(' ');
        const bearerToken = bearer[1];
       let user =jwt_decode(bearerToken)
       let isUser=await userModel.find({_id:user._id})
       if(isUser.length!=0){
           req.user=isUser[0]
       }
       else{
        res.send({authorizationerror:"invalid token"})
       }
        next();
      }
      else{
          res.send({authorizationerror:"token not provided"})
          
      }
}
module.exports=auth