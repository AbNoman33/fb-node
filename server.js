const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const userRoute = require("./routes/user.js");

//environment variable
dotenv.config();
PORT = process.env.SERVER_PORT || 4040;

//EXPRESS INIT
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//api routes
app.use("/api/v1/users", userRoute);

//server listen
app.listen(PORT, (req, res) => {
  console.log(`server is runnin on port ${PORT}`.bgGreen);
});
