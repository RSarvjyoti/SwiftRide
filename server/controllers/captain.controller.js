const blacklistTokenModel = require("../models/blacklistToken.model");
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

module.exports.loginCaptain = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { email, password } = req.body;

    // Fix typo here!
    const captain = await captainModel.findOne({ email }).select("+password");
    if (!captain) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Make sure comparePassword uses correct arguments internally
    const isMatch = await captain.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const token = await captain.generateAuthToken();

    res.header("Authorization", `Bearer ${token}`).status(200).json({
      message: "Login successful",
      token,
      captain,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.getCaptainProfile = async (req, res) => {
  res.status(200).json(req.captain);
};

module.exports.logoutCaptain = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized" });
  }

  try {
    await blacklistTokenModel.create({ token });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    next(error);
  }
};
