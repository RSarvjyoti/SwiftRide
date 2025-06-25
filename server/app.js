const { config } = require("dotenv");
config();
const express = require("express");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/user.route")

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home route");
});

app.use('/api/users', userRoutes);

module.exports = app;
