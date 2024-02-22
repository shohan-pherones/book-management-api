require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth.route");
const userRouter = require("./routes/user.route");
const bookRouter = require("./routes/book.route");

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

// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/books", bookRouter);

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
