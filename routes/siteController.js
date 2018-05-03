const express = require("express");
const siteController = express.Router();

siteController.get("/", (req, res, next) => {
  res.render("site/index", { apiKey: "AIzaSyDmsqiHyfwW5OBOax6qlJ2419HLTz29Cec" });
});

module.exports = siteController;
