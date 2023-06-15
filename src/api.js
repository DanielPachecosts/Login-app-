require("dotenv").config();
const express = require("express");
const cors = require('cors')
const passport = require("passport");
const cookieSession = require("cookie-session");
const apiRoutes = require("./routes/router.config");
const serverless = require('serverless-http');

const app = express();
// const port = process.env.PORT

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

// app.listen(port, () => {
//   console.log(`App running on port ${port}`);
// });
module.exports.handler = serverless(app);
