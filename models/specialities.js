const mongoose = require('mongoose')
const specialitySchema = mongoose.Schema({
  
    picture: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    
})
const specialityModel = mongoose.model('speciality', specialitySchema)
module.exports = specialityModel
