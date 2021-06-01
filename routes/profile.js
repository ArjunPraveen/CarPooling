const User = require('../models/User')
const Ride = require('../models/Ride');
const { response } = require('express');
let exp = {};

exp.editProfile = async(req,res)=>{
    try {
        const {name, mobileNumber, email} = req.body;
        console.log(req.body)
        //return res.send({msg: "Hello", success: true})
        console.log(req.token)
        if(mobileNumber == req.token.mobileNumber && email == req.token.email && name == req.name){
            return res.send({msg: "No changes made", success: false})
        }
        // const user = await User.findOne({email : req.token.email})
        // console.log(user)
        const query = await User.updateOne({email: req.token.email}, {$set: {name, mobileNumber, email}})
        //console.log(query.nModified)
        return res.send({msg: "Details edited successfully", success: true})
        // if(query.nModified){
        //     //res.clearCookie('token');
        //     return res.send({msg: "Details edited successfully", success: true})
        // }else{
        //     return res.send({msg: "No details edited", success:false})
        // }
        
        } catch (err) {
        console.log(err)
            return res.send({msg: "Internal Server Error", success:"false"})
    }
    

}

exp.viewProfile = async(req,res)=> {

}



module.exports = exp