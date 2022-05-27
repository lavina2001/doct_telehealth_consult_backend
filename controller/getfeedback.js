const feedbackService=require('../service/getfeedback')
module.exports.getfeedback = async (req, res, next) => {
  try {
    // console.log(">>>>>>>>>>>>>>>>>>",req.query.did);
    // let user_id = req.user[0]._id
    // let doctor_id = req.query.did

     let response=await feedbackService.getFeedBackData()
     console.log("response>>>>>.", typeof response);
      console.log("response>>>>>236737.",  response);
    // res.redirect('/getfeedback')
    res.render('getfeedback',{response})
  } catch (error) {
     console.log(error)
  }
}

// module.exports.saveData=async(req,res,next)=>{
//   try{
//      const {doctorId,userId,feedback}=req.body
//      const result=await feedbackService.saveData({doctorId,userId,feedback})
//      return res.render('feedback')
//   }catch(error){
//      res.send({error:"something went wrong while enter the data",errorType:error})
//   }
// }