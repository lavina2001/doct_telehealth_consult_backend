const Router=require('express').Router
const user=require('../controller/user')
const router=Router()
router.post('/',user.singup);
router.post('/login',user.login);

module.exports=router