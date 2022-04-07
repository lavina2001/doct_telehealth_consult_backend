const Router = require('express').Router
const userDoctor = require('../controller/userdoctor')
const auth=require("../middleware/auth")
const router = Router()
router.get('/doctor', userDoctor.get);
// router.get('/dashboard',auth.doctorAuth,userDoctor.doctorDashboard)
router.get('/doctorDashboard',auth.doctorAuth,userDoctor.doctorDashboard)
module.exports = router
