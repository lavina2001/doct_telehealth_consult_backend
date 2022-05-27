module.exports.showPage = async (req, res, next) => {
  try {
    res.render('diseases')
  } catch (error) {
     console.log(error)
  }
}
