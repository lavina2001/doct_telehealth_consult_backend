const jwt = require("jsonwebtoken")
const jwt_decode = require("jwt-decode");
const userModel = require("../models/user");
module.exports.auth = async (req, res, next) => {
    try {

        let token = req.cookies.token

        if (token != '') {
  
            let userData = await userModel.find({ $and: [{ token }, { role: 0 }] })
                // console.log(userData)
                if (userData.length != 0) {
                    req.user = userData
                    next();
                }
                else { res.redirect('/login') }
        
        }
        else {
            res.redirect('/login')

        }
    } catch (error) {
        console.log(error)
        res.redirect('/login')

    }
}
module.exports.doctorAuth = async (req, res, next) => {
    try {
        let token = req.cookies.token
        if (token != '') {

                let userData = await userModel.find({ $and: [{ token }, { role: 1 }] })
                if (userData.length == 0) {
                    res.redirect('/login')
                } else {
                    req.user = userData
                    next();
                }
        }
        else {
            res.redirect('/login')

        }
    } catch (error) {
        console.log(error)
        res.redirect('/login')

    }
}

module.exports.adminAuth = async (req, res, next) => {
    try {
        let token = req.cookies.token
        if (token != '') {

                let userData = await userModel.find({ $and: [{ token }, { role: 2 }] })
                if (userData.length == 0) {
                    res.redirect('/login')
                } else {
                    req.user = userData
                    next();
                }
        }
        else {
            res.redirect('/login')

        }
    } catch (error) {
        console.log(error)
        res.redirect('/login')

    }
}
