// const passport = require("../middleware/passport");
module.exports = {
  login: (req, res) => {
    res.render("auth/login");
  },
  googleCallback: (req, res) => {
    res.send("loggined");
  }
};
