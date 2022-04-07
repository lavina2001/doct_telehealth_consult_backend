const userDoctor = require('../service/user.doctor')
const jwt =require('jsonwebtoken')
module.exports.showRegsiterPage=async(req,res,next)=>{
    res.render('doctorRegister')
}
// module.exports.singup = async (req, res, next) => {
//     try {
//         const payload = req.body;
//         const response = await userDoctor.singup(payload);
//         if (response.status) {
//             //  res.send({msg:"new user created"})
//             let {doctor}=response
//             let token = jwt.sign({ _id:doctor._id, mobile: doctor.mobileNo }, process.env.JWT_SECRET_KEY)
//             res.cookie('token',token)
//             res.redirect('/')
//           }
//           else {
//            res.redirect('/doctorRegister')
//           }
//     } catch (error) {
//     }
// }
// module.exports.login = async (req, res, next) => {
//     try {
//         const payload = req.body;
//         const response = await userDoctor.login(payload);
//         if (response.status) {
//             res.send({ msg: "you are logged In",token:response.token })
//         }
//         else {
//             res.send({ msg: "username or password are incorrect" })
//         }

//     } catch (error) {

//     }
// }
module.exports.get = async (req, res, next) => {
    try {
        const response = await userDoctor.get();
        if (response.status) {
            res.send({ msg: "your data", data: response.data })
        }
        else {
            res.send({ msg: "data not found" })
        }
    } catch (error) {
        console.log(error)

    }

}
module.exports.doctorDashboard = async (req, res) => {
    try {
        let {_id}=req.user[0]
        // console.log("doctorDashboard id",_id)
        let response=await userDoctor.getDashboard(_id)
        // console.log(response)
        res.render('doctorDashboard',{response})
    } catch (error) {

    }
}
