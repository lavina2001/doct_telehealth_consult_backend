const Router = require('express').Router
const userDoctor = require('../controller/userDoctor')
const user = require('../controller/user')
const speciality=require('../service/specialities')
const auth = require('../middleware/auth')
const upload = require('../middleware/upload')
const router = Router()
router.post('/register', upload, user.singup);
router.get('/register',async(req, res) => {
    let response= await speciality.get()
    res.render('register',{data:response})
})
router.get('/doctorDashboard',auth.doctorAuth,userDoctor.doctorDashboard)
router.post('/login', user.login);
router.get('/doctorProfile',auth.auth,user.doctorProfilePage)
router.get('/doctorlist',auth.auth,user.doctorSearch)
router.get('/booking',auth.auth, user.bookingPage)
router.post('/booking',auth.auth,user.booking)
router.get('/appoinmentList',auth.auth,user.appoinmentList)
router.get('/login', (req, res) => {
    res.render('login')
});
module.exports = router