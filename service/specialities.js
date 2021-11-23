const specialities = require('./specialities')
const multer = require('multer')
const specialitiesModel = require('../models/specialities')
module.exports.add = async (payload) => {
    try {
     /* var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, './images')
        },
        filename: function (req, file, cb) {
          cb(null, file.originalname)
        }
    })
    var upload = multer({ storage: storage })
    upload.single('picture')*/
        const newSpecialities = new specialitiesModel(payload);
        console.log(payload);
        await newSpecialities.save()
        return 1
    } catch (error) {
        return error
    }
}
module.exports.get=async ()=>{ 
  try{
    const specialities = await specialitiesModel.find()
  if(specialities.length!=0){
    return specialities
  }
  else{
    return 0
  }
  }
  catch(error){
    
  }
}