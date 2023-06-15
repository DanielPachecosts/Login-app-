const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "OK" });
});

router.get("/home", (req, res) => {
  const user = req.user;
  res.status(200).json({ message: "Login Ok", user: user });
});

router.get("/failed", (req, res) => {
  res.status(401).json({message: "Authentication Failed"})
})

module.exports = router;
