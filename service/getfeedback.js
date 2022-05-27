// const mongo = require('../db/db')
// const mongoose = require('mongoose')
// let User = mongoose.model('User', {
//     name: { type: String },
//     age: { type: Number }
// });

// User.find({}, function (err, docs) {
//     if (err){
//         console.log(err);
//     }
//     else{
//         return docs
//         console.log("First function call : ", docs);
//     }
// });
// // console.log("abc>>>>>>>>>>>>>.", abc);


const jwt = require('jsonwebtoken')
const bcryptjs = require("bcryptjs")
const userModel = require('../models/user')
    
module.exports.getFeedBackData=async()=>{
  try{
    //  let _id=payload
    //  console.log(_id)
     let response=await userModel.find({role : "1"})
      return response
  }catch(err){
    console.log("err>>>>>>>", err);
  }
}
    

