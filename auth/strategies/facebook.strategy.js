const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: process.env.FACEBOOK_CALLBACK_URI,
    },
    function (accessToken, refreshToken, profile, cb) {
      const user = {
        name: profile.displayName,
        email: profile.email,
        image: profile.image,
      };
      return cb(null, user);
    }
  )
);
