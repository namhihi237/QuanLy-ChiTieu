require("dotenv-safe").config({
  example: process.env.CI ? ".env.ci.example" : ".env.example"
});
require("./src/passport");
const authRouter = require("./src/routes/auth.route");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = process.env.PORT;
const mongoUrl = process.env.MONGO_URL;
const passport = require("passport");
//connect mongodb
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
app.set("views", "./src/views");
app.set("view engine", "pug");
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => console.log(`server run port = ${port}`));
