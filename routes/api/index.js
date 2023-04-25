let express = require("express");
let router = express.Router();

let v1IndexRouter = require("./v1/index");
let v2IndexRouter = require("./v2/index");

router.use("/v1", v1IndexRouter);
router.use("/v2", v2IndexRouter);
router.use("/", v1IndexRouter);

module.exports = router;
