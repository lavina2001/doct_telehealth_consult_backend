
// const multer = require('multer')
const specialitiesModel = require('../models/specialities')
module.exports.add = async (payload) => {
    try {
        const newSpecialities = new specialitiesModel(payload);
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