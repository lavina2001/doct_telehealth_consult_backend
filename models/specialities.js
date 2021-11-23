const mongoose = require('mongoose')
const specialitySchema = mongoose.Schema({
    srno: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    doctors: [{ type: String }]
})
const specialityModel = mongoose.model('speciality', specialitySchema)
module.exports = specialityModel
