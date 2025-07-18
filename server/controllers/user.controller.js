const blacklistTokenModel = require("../models/blacklistToken.model");
const userModel = require("../models/user.model");
const { createUser } = require("../services/user.service");
const { validationResult } = require("express-validator");

module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password } = req.body;

  try {
    const hashedPassword = await userModel.hashPassword(password);
    const isUserExists = await userModel.findOne({ email });

    if(isUserExists) {
      return res.status(400).json({ message: "User already exists with this email" });
    }

    const user = await createUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
    });

    const token = user.generateAuthToken();

    res.status(201).json({
      token,
      user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports.loginUser = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).select("+password");
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = await user.generateAuthToken();  // added await

    res.header("Authorization", `Bearer ${token}`);
    res.status(200).json({
      token,
      user
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports.getUserProfile = async (req, res, next) => {
    res.status(200).json(req.user);
}

module.exports.logoutUser = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Unauthorized - No token provided" });
    }

    try {
        await blacklistTokenModel.create({ token });
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        next(error);
    }
}