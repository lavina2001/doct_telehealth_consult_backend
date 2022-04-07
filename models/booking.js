const mongoose = require('mongoose')

const bookingSchema = mongoose.Schema({
    petientId:{
      type:String,
      required:true
    },
    doctorId:{
        type:String,
        required:true
    },
    booking:{
       date:{type:Date},
       day:{type:String},
       time:{type:Date}
    }
})
const bookingModel = mongoose.model('booking', bookingSchema)
module.exports = bookingModel
