const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../key");

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    async (req, accessToken, refreshToken, profile, done) => {
      try {
        console.log("profile", profile.id);
        // console.log("accessToken", accessToken);
        // console.log("refreshToken", refreshToken);
      } catch (error) {
        console.log(error);
      }
    }
  )
);
module.exports = {
  google: passport.authenticate("google", {
    scope: ["profile", "email"]
  }),
  googleCallback: passport.authenticate("google")
};
