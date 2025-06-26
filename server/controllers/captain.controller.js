const captainModel = require("../models/captain.model");
const { createCaptain } = require("../services/captain.service");
const { validationResult } = require("express-validator");

module.exports.registerCaptain = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { fullname, email, password, vehicles } = req.body;
    
    // Check if captain already exists
    const isCaptainExists = await captainModel.findOne({ email });
    if (isCaptainExists) {
      return res
        .status(400)
        .json({ error: "Captain already exists with this email" });
    }

    // Hash password
    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await createCaptain({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
      color: vehicles.color,
      plate: vehicles.plate,
      capacity: vehicles.capacity,
      vehicleType: vehicles.vehicleType,
    });

    const token = await captain.generateAuthToken();

    res.status(201).json({
      token,
      captain,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
