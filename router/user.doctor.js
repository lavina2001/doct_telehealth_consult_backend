const Router = require('express').Router
const userDoctor = require('../controller/user.doctor')
const router = Router()
router.post('/', userDoctor.singup);
router.get('/', userDoctor.get);
router.post('/login', userDoctor.login);
module.exports = router