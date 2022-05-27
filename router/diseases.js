const Router = require('express').Router
const diseases=require('../controller/diseases')
const router = Router()
router.get("/",diseases.showPage)
module.exports=router