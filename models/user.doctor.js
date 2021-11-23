const mongoose = require('mongoose')

const userDoctorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    qualification: [{
        type: String,
        required: true
    }],
    speciality: {
        type: String,
        required: true
    },
    memberSince: {
        type: Date,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    mobileNo: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    reviews: [{
        userId: { type: String },
        rating: { type: Number },
        comment: { type: String }
    }],
    password: {
        type: String,
        required: true
    },
    // profile: {
    //     type: String,
    //     required: true
        
    // }
})
const userDoctorModel = mongoose.model('doctor', userDoctorSchema)
module.exports = userDoctorModel
