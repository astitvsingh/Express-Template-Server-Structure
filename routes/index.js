let express = require("express");
let router = express.Router();

let apiIndexRouter = require("./api/index");
let wappIndexRouter = require("./wapp/index");

router.use("/api", apiIndexRouter);
router.use("/", wappIndexRouter);

module.exports = router;
