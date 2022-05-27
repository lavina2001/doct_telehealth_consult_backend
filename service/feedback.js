
const userModel=require('../models/user')
module.exports.saveData=async(data)=>{
    try{
      let {doctorId}=data
      const result=await userModel.findByIdAndUpdate({_id:doctorId},
        {$push:{feedback:{userId:data.userId,feedback:data.feedback
    }}})
       if (result){
           return {status:true}
       }else{
           return {error:"data not updated",staus:false}
       }

   

       
    }catch(err){
        console.log(err)
       if (err) throw err
    }
}
