const express = require("express");
const register = require('./register')
const auth = require('../middleware/auth')
const router = express.Router();


router.get('/', (req,res)=> {
    res.render('registration')
})


router.get('/profile', auth, (req,res)=> {
    res.render('profile', {token : req.token})
})


//login and register
router.post("/api/signup", register.signup);
router.post("/api/login", register.login);
router.get("/api/logout", register.logout)

module.exports = router;
