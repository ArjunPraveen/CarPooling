const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require("dotenv").config();
const { check, validationResult } = require('express-validator');
const User = require('../models/User')
let exp = {};

// exp.signup = async(req,res)=>{
//     try {
//         console.log(req.body)
//         res.json({status:'ok'})
//     } catch (err) {
//         console.log(err)
//     }
// }

exp.signup = ([
    check("name", "Enter a valid Name").exists(),
    check("email", "Enter a valid Email").not().isEmail(),
    check("password", "Password is required").exists(),
], async(req,res)=>{
    try {
        console.log(req.body)
        const errors = validationResult(req);
        console.log(errors)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let {name,email,password} = req.body
        let id_obj = await User.find({}, { userID: 1, _id: 0 })
            .sort({ userID: -1 })
            .limit(1);
        let userID = 5000;
        if (id_obj[0]) {
          userID = id_obj[0].userID + 1;
        }
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);
        const newUser = new User({
            userID,
            name,
            email,
            password,
        })

        await newUser.save();
        return res.send({
            success: true,
            msg: 'Registered.',
          });

    } catch (err) {
        console.log(err)
        return res.send({success: false, msg:"check console"})
    }
})

exp.login = async(req,res)=>{
    try {
        const {email, password} = req.body
        const user = await User.findOne({email}).lean()
        
        if(!user){
            return res.send({success: false, msg: 'Invalid Credentials'})
        }

        if(await bcrypt.compare(password, user.password)){
            const token = jwt.sign({
                email: user.email,
                userID:user.userID 
            },process.env.JWT_secret)
            return res.body({success: true, data:token})
        }


    } catch (err) {
        
    }
}


module.exports = exp