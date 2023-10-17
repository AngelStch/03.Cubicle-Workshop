const errorMessage = require("../utils/errorHandle.js")

module.exports = (err,req,res,next) =>{
    const errorMessages = errorMessage(err)
    res.render('404', {errorMessages})
}