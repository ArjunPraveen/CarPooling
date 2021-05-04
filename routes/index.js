const express = require("express");
const register = require('./register')
const profile = require('./profile')
const auth = require('../middleware/auth')
const router = express.Router();


router.get('/', (req,res)=> {
    res.render('registration')
})


router.get('/profile', auth, (req,res)=> {
    res.render('profile', {token : req.token})
})


//login and register routes
router.post("/api/signup", register.signup)
router.post("/api/login", register.login)
router.get("/api/logout", register.logout)

//profile routes
router.post('/api/editprofile', auth, profile.editProfile)
router.post('/api/fillform', auth, profile.fillForm)

module.exports = router;
