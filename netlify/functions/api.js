require("dotenv").config();
const express = require("express");
const cors = require('cors')
const passport = require("passport");
const cookieSession = require("cookie-session");
const apiRoutes = require("../../routes/router.config");
const serverless = require('serverless-http');

const app = express();

require("./auth/strategies/google.strategy");
require("./auth/strategies/facebook.strategy");

app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
app.use(
  cookieSession({
    name: "google-auth-session",
    keys: [process.env.COOKIE_KEY],
  })
);

apiRoutes(app);

module.exports = serverless(app);
