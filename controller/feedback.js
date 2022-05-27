const feedbackService=require('../service/feedback')
module.exports.showPage = async (req, res, next) => {
  try {
    let user_id = req.user[0]._id
    let doctor_id = req.query.doctorid

    
    res.render('feedback',{
      user_id,
      doctor_id
    })
  } catch (error) {
     console.log(error)
  }
}

module.exports.saveData=async(req,res,next)=>{
  try{
     const {doctorId,userId,feedback}=req.body
     const result=await feedbackService.saveData({doctorId,userId,feedback})
     return res.render('feedback')
  }catch(error){
     res.send({error:"something went wrong while enter the data",errorType:error})
  }
}
