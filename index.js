require("dotenv-safe").config({
  example: process.env.CI ? ".env.ci.example" : ".env.example"
});
require("./src/passport");
const path = require("path");

const authRouter = require("./src/routes/auth.route");
const homeRouter = require("./src/routes/home.route");
const chartRouter = require("./src/routes/chart.route");
const middleware = require("./src/middleware/login.middleware");

const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const port = process.env.PORT;
const mongoUrl = process.env.MONGO_URL;
const passport = require("passport");

const app = express();
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
app.set("views", "./src/views");
app.set("view engine", "pug");

app.use(cookieParser(process.env.COOKIEKEY));
app.use(passport.initialize());
app.use(passport.session());
// app.use("/static", express.static(path.join(__dirname, "public")));
app.use(express.static("src/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authRouter);
app.use("/home", middleware.loggedIn, homeRouter);
app.use("/chart", middleware.loggedIn, chartRouter);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => console.log(`server run port = ${port}`));
