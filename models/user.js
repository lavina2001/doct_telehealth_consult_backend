const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        default:''
    },
    qualification: {
        type: String,
    },
    role:{
        type:String,
        require:true
    },
    speciality: {
        type: mongoose.Types.ObjectId,
        required:false
    },
    memberSince: {
        type: Date,
        default: ''
    },
    country:{
        type:String,
    },
    city:{
        type:String,
    },
    isActive: {
        type: Boolean,
        default: true
    },
    mobileNo: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profile: {
        type: String,

    },
    price:{
        type:Number,

    },
    appointment:[
        {
            userId:{type:mongoose.Schema.Types.ObjectId},
            appointmentDate:{type:Date,default:Date.now()},
            diceases:[{type:String}],
            date:{type:Date,required:true},
            time:{type:String,required:true}
        }
    ],
    token:{
        type:String
    }
})
const userModel = mongoose.model('user', userSchema)
module.exports = userModel
