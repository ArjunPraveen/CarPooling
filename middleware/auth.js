const jwt = require('jsonwebtoken')
require("dotenv").config();
module.exports = (req,res,next) => {
    const token = req.header('x-auth-token')
    try {
        if(!token){
            return res.send({success: false, msg: 'Authorization denied'})
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decoded)
        next()
    } catch (err) {
        console.log(err)
    }
    
}