const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { registerCaptain, loginCaptain, getCaptainProfile, logoutCaptain } = require("../controllers/captain.controller");
const { authCaptain } = require("../middlewares/auth.middleware");

router.post(
  "/register",
  [
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
    body("fullname.lastname")
      .optional()
      .isLength({ min: 3 })
      .withMessage("Last name must be at least 3 characters long"),
    body("email").isEmail().withMessage("Please enter a valid email address"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    body("vehicles.color")
      .isLength({ min: 3 })
      .withMessage("Color must be at least 3 characters long"),
    body("vehicles.plate")
      .isLength({ min: 3 })
      .withMessage("Plate must be at least 3 characters long"),
    body("vehicles.capacity")
      .isInt({ gt: 0 })
      .withMessage("Capacity must be at least 1"),
    body("vehicles.vehicleType")
      .isIn(["car", "motorcycle", "auto"])
      .withMessage("Type must be one of car, motorcycle, or auto"),
  ],
  registerCaptain
);

router.post("/login", [
  body("email").isEmail().withMessage("Please enter a valid email address"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
], loginCaptain);

router.get("/profile", authCaptain, getCaptainProfile );
router.get('/logout',authCaptain, logoutCaptain)
module.exports = router;
