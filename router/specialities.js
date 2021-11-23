const Router=require('express').Router
const specialities=require('../controller/specialities')
const router=Router()
router.post('/',specialities.add);
router.get('/',specialities.get);
module.exports=router