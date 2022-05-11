const Router=require('express').Router
const admin=require('../controller/admin')
const upload=require('../middleware/upload')
const auth=require('../middleware/auth')
const router=Router()
router.get('',auth.adminAuth,admin.index_page);
router.get('/appointment',auth.adminAuth,admin.appoiment_page)
router.get('/specialities',auth.adminAuth,admin.specialities_page)
router.get('/doctor',auth.adminAuth,admin.doctor_page)
router.get('/patient',auth.adminAuth,admin.patient_page)
router.get('/profile',auth.adminAuth,admin.profile_page)
router.get('/getSpecialities',auth.adminAuth,admin.getSpecelities)
router.post('/addSpecelities',auth.adminAuth,upload,admin.addSpecelities)
router.get('/specialities/:id',auth.adminAuth,admin.specialitiesById)
router.post('/editSpecialities',auth.adminAuth,upload,admin.editSpecialities)
router.get('/deleteSpecialities/:id',auth.adminAuth,admin.deleteSpeciality)



module.exports=router