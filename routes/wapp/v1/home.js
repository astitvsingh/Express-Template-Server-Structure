let express = require("express");
let router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("home", { layout: "main", title: "App: Home" });
});

module.exports = router;
