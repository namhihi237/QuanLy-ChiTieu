module.exports = {
  login: (req, res) => {
    res.render("auth/login");
  },
  googleCallback: (req, res) => {
    console.log(req.user);
    res.cookie("userId", req.user.idGoogle, {
      maxAge: 1200000,
      httpOnly: true,
      signed: true
    });
    res.redirect("/home");
  },
  logout: (req, res) => {
    res.clearCookie("userId");
    res.redirect("/");
  }
};
