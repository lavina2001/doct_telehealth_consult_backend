const Router = require('express').Router
const {auth} = require ('../middleware/auth')
const feedback=require('../controller/feedback')

const router = Router()
router.get("/",auth,feedback.showPage)
router.post("/",feedback.saveData)
module.exports=router