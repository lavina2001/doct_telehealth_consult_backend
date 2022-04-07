const admin = require('../service/admin')
const upload = require('../middleware/upload')
const specialityModel = require('../models/specialities')
const userModel = require('../models/user')
const { request } = require('express')

module.exports.index_page = async (req, res, next) => {
    try {
        const response=await admin.dashboard()
        console.log("Admin JS",response)
        res.render('adminIndex',{data:response})
    } catch (error) {
        console.log(error)
    }
}
module.exports.appoiment_page = async (req, res, next) => {
    try {
        // const response=await admin.get()
        res.render('adminAppointmentList')
    } catch (error) {
        console.log(error)
    }
}
module.exports.specialities_page = async (req, res, next) => {
    try {
        // const response=await admin.get()
        res.render('specialities')
    } catch (error) {
        console.log(error)
    }
}
module.exports.doctor_page = async (req, res, next) => {
    try {
        const response=await admin.getDoctor(1)
        res.render('doctor',{response})
    } catch (error) {
        console.log(error)
    }
}
module.exports.patient_page = async (req, res, next) => {
    try {
        let response=await admin.getDoctor(0)
        res.render('patient',{response})
    } catch (error) {
        console.log(error)
    }
}
module.exports.profile_page = async (req, res, next) => {
    try {
let user=req.user
        res.render('adminProfile',{user})
    } catch (error) {
        console.log(error)
    }
}
module.exports.getSpecelities = async (req, res, next) => {
    try {
        let response = await admin.getSpecelities()
        if (response.status) {
            res.send(response.data);
        }else{
            res.send([])
        }
    } catch (err) {

    }
}
module.exports.addSpecelities = async (req, res, next) => {
    try {
        let title = req.body.title
        let file = req.file.path
            file=file.substring(6)
        let response = await admin.addSpecelities({ file, title })
        if (response) {
            res.redirect('/admin/specialities')
        }
    } catch (err) {
        console.log(err)
    }

}
module.exports.specialitiesById=async(req,res,next)=>{
    try{
        let id=req.params.id
        let response=await admin.specialitiesById(id)
        if (response.status) {
            res.send({status:1,data:response.data})
        }else{
            res.send({status:0,data:[]})
        }

    }catch(err){

    }
}
module.exports.editSpecialities=async(req,res,next)=>{
    try{
      let id=req.body.id
      let title=req.body.title
      let picture=req.file?.path
          picture=picture.substring(6)
      let response=await admin.editSpecialities({id,title,picture})
      response?redirect('/admin/specialities'):res.send({status:0})
    }catch(err){
      console.log(err)
    }
}
module.exports.deleteSpeciality=async(req,res,next)=>{
    try{
         let _id=req.params.id;
         console.log(_id)
         let response=await specialityModel.deleteMany({_id})
        //  console.log(response)
        if(response.deletedCount){
            res.redirect('/admin/specialities')
        }
         res.send(response)
    }catch(err){
       console.log(err)
    }
}