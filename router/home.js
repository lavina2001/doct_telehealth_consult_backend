const Router=require('express').Router
const home=require('../controller/home')
const auth=require('../middleware/auth')
const router=Router()
router.get('',auth.auth,home.getHomePageContent);

module.exports=router