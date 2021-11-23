const userDoctor = require('../service/user.doctor')
module.exports.singup = async (req, res, next) => {
    try {
        const payload = req.body;
        const response = await userDoctor.singup(payload);
        if (response) {
            res.send({ msg: "new doctor created" })
        }
        else {
            res.send({ msg: "doctor not created" })
        }
    } catch (error) {

    }
}
module.exports.login = async (req, res, next) => {
    try {
        const payload = req.body;
        const response = await userDoctor.login(payload);
        if (response.status) {
            res.send({ msg: "you are logged In", token: response.token })
        }
        else {
            res.send({ msg: "username or password are incorrect" })
        }

    } catch (error) {

    }
}
module.exports.get = async (req, res, next) => {
    try {
        const response = await userDoctor.get();
        if (response.status) {
            res.send({ msg: "your data", data: response.data })
        }
        else {
            res.send({ msg: "data not found" })

        }

    } catch (error) {
        console.log(error)

    }

}
