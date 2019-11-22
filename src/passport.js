const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./key");
const Users = require("../src/models/users.model");
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "http://localhost:5555/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        console.log("profile", profile);
        const exitstingUser = await Users.findOne({ id: profile.id });
        if (exitstingUser) {
          return done(null, exitstingUser);
        }
        const user = await new Users({
          id: profile.id,
          email: profile.emails[0].value,
          name: profile.name.familyName + " " + profile.name.givenName
        }).save();
        done(null, user);
      } catch (error) {}
    }
  )
);
