let createError = require("http-errors");
let express = require("express");
let router = express.Router();

/* GET home page. */
router.use(function (req, res, next) {
  //next(createError(404));
  res.render("404", {
    layout: "main",
    title: "Error: 404",
    message: `${
      req.statusMessage ? req.statusMessage : "Error 404: Page not found!"
    }`,
    status: `${req.statusCode ? req.statusCode : 404}`,
  });
});

module.exports = router;
