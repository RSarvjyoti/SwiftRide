const { config } = require("dotenv");
config();
const express = require("express");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/user.route")
const captainRoutes = require("./routes/captain.routes");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home route");
});

app.use('/api/users', userRoutes);
app.use('/api/captains', captainRoutes);

module.exports = app;
