const specialities = require('../service/specialities')
module.exports.add = async (req, res, next) => {
  try {
    const payload = req.body;
    const response = await specialities.add(payload);
    if (response) {
      res.send({ msg: "new specialities created.." })
    } else {
      res.send({ msg: "specialities not created.." })
    }
  } catch (error) {
    res.send({ error: 'somthing went to wrong', errorType: 'error' })
  }
}
module.exports.login = async (req, res, next) => {
  try {
    const payload = req.body;
    const response = await user.login(payload);
    res.send(response)
  } catch (error) {

  }
}
module.exports.get = async (req,res,next) => {

  try {
    const response = await specialities.get()
    if(response.length!=0){
      res.send({msg:"your data",data:response})
    }
    else{
      res.send({msg:"data not found"})
    }
  }
  catch (error) {

  }
}
