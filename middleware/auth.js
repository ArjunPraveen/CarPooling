const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
require("dotenv").config();
module.exports = (req,res,next) => {
    //console.log(req)
    const token = req.cookies['token']
    console.log(token)
    try {
        if(!token){
            return res.send({success: false, msg: 'Authorization denied'})
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log("hello",decoded)
        req.token = decoded
        next()
    } catch (err) {
        console.log(err)
        return res.send({success: false, msg:"check auth middleware"})
    }
    
}