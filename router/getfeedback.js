const Router = require('express').Router
const {auth} = require ('../middleware/auth')
const getfeedback=require('../controller/getfeedback')

const router = Router()
// router.get("/",getfeedback.rujul)
router.get("/",getfeedback.getfeedback)
// router.post("/",getfeedback.saveData)
module.exports=router