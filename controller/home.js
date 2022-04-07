// const home=require('../service/home')
const specialities = require('../service/specialities')
module.exports.getHomePageContent = async (req, res, next) => {
   try {
      const response = await specialities.get()
      
      res.render('index', { data: response })
   } catch (error) {
      console.log(error)
   }
}
