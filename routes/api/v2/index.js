let express = require("express");
let router = express.Router();

let homeRouter = require("./home");
let usersRouter = require("./users");
let e404Router = require("./404");

router.use("/", homeRouter);
router.use("/users", usersRouter);
router.use(e404Router);

module.exports = router;
