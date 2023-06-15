const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URI,
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      const user = {
        name: profile._json.name,
        email: profile.email,
        image: profile.picture,
      };
      return done(null, user);
    }
  )
);
