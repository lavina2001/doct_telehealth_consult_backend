const user = require('../service/user')
const jwt=require('jsonwebtoken');
const auth = require('../middleware/auth');
const userModel=require('../models/user');
const async = require('hbs/lib/async');
module.exports.singup = async (req, res, next) => {
  try {
    const payload = req.body;
    console.log("payload>>>", payload);
    let profile=req.file?.path
    console.log(" payload.profile>>>>",  payload.profile);
    payload.profile=profile.substring(6)
    console.log(" payload.profile>>>>..........",  payload.profile);

if(profile!==undefined){payload.profile=profile.substring(6)}
    // console.log(payload)
    console.log("payload>>>", payload);
    const response = await user.singup(payload);
    console.log("response>>>", response);
    if (response.status == 1) {
      //  res.send({msg:"new user created"})
       let {token}=response.user
       console.log(token)
      res.cookie('token',token)
      if(response.user.role==2){
        res.redirect('/admin/')
      }else if(response.user.role==1){
        
        res.redirect(`doctorDashboard?did=${response.user._id}`)
      }
      // res.redirect('/doctorList')

    }
    else {
      res.redirect('/login')
    }
  } catch (error) {
     console.log(error)
  }
}
module.exports.login = async (req, res, next) => {
  try {
    const payload = req.body;
    console.log("payload>>>>>>>",payload)
    const response = await user.login(payload);
    if (response.status) {
      let {token}=response.user[0]
      console.log("resonse user",response.user[0])

      res.cookie('token',token)
      if(response.user[0].role==2){
        res.redirect('/admin/')
      }else if(response.user[0].role== 1){
        res.redirect(`/doctorDashboard?did=${response.user[0]._id}`)

        // console.log("_id>>>>>>>>>>>>>>..", response.user[0]._id);
        // try {

          
        // } catch (error) {
        //   console.log("errrr>>>>>>>>", error.message);
        // }

        // // let a = localStorage.getItem("D_id");
        // // console.log("a>>>>>>>>>>>>..", a);
        // res.redirect(`/doctorDashboard/`)
      }else{
        console.log("asasadasdas????????????????????");
         res.redirect('/doctorList')
      }

     
    }
    else {
      res.render('login',{error:'username and password are incorrect'})
    }

  } catch (error) {

  }
}
module.exports.doctorSearch=async(req,res,next)=>{
  try{
    // let payload=req.body.searchItem;
    // console.log(payload)
    let data=await user.doctorSearch();
    console.log("the data is ",data);
    if(data.length!=0){
      res.render('doctorList',{data})
    }else{
      res.send({status:0})
    }
  }catch(err){
     console.log(err)
  }
}
module.exports.doctorProfilePage=async(req,res,next)=>{
  try{
    let doctorId=req.query.did
    console.log(doctorId)  
    let {doctor,speciality}=await user.doctorProfile(doctorId)
    console.log("doctorrrrrrrrrrr>",typeof doctor,typeof speciality);
    res.render('doctor-profile',{doctor,speciality})
  }catch(err){
     console.log(err)
  }
}
module.exports.bookingPage=async(req,res,next)=>{
  try{
    let userData=req.user
    // console.log(userData)
    let doctorId=req.query.did
    let {doctor}=await user.doctorProfile(doctorId)
    res.render('booking',{doctor,userData:userData[0],doctorId})
  }catch(error){

  }
}
module.exports.booking=async(req,res,next)=>{
  try{
   let payload=req.body
   let { userId, doctorId, date, time, diceases } = payload
   diceases = diceases.split(',')
   console.log({ userId, doctorId, date, time, diceases })
   let response = await userModel.updateOne({ _id: doctorId }, {
           $push: { appointment:{userId, date, time, diceases }}
  
   })
  console.log(response)
  res.redirect(`/appoinmentList`)
  }catch(err){
   console.log(err)
  }
}
module.exports.appoinmentList=async(req,res,next)=>{
  try{
    let {_id}=req.user[0]
    let response=await userModel.find({'appointment.userId':_id}).limit(1)
    
    console.log(response)
    res.render('appoinmentList',{data:response[0]})
  }catch(err){
   console.log(err)
  }
}