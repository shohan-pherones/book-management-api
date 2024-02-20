require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// express app
const app = express();

// middlewares
app.use(express.json());
app.use(cors({ credentials: true }));

// test api
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to our server!",
  });
});

// port
const port = process.env.PORT || 8080;

// uri
const uri = process.env.MONGODB_URI;

// db connection
mongoose
  .connect(uri)
  .then(() => {
    // listen
    app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
