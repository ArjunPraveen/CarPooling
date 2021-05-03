const express = require("express");
const register = require('./register')
const isLoggedIn = require('../middleware/auth')
const router = express.Router();


router.get('/', (req,res)=> {
    res.render('registration')
})

router.get('/', isLoggedIn)


//login and register
router.post("/api/signup", register.signup);
router.post("/api/login", register.login);

module.exports = router;
