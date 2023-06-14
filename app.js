require("dotenv").config();
const express = require("express");
const passport = require("passport");
const cookieSession = require("cookie-session");
const apiRoutes = require("./routes/router.config");

const app = express();
const port = process.env.PORT

require("./auth/strategies/google.strategy");
require("./auth/strategies/facebook.strategy");

app.use(
  cookieSession({
    name: "google-auth-session",
    keys: [process.env.COOKIE_KEY],
  })
);

app.use(passport.initialize());
app.use(passport.session());

apiRoutes(app);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
