const express = require("express");
const {body} = require("express-validator");
const { registerUser } = require("../controllers/user.controller");

const router = express.Router();

router.post('/register', [
    body('email').isEmail().withMessage("Invalid Email"),
    body("fullname.firstname").isLength({min : 3}).withMessage(`First name must be at least 3 characters long`),
    body("password").isLength({min : 6}).withMessage("Password must be at least 6 charaters long")
], registerUser);

module.exports = router;