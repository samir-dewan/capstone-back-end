const router = require("express").Router();
const controller = require("../controllers/connectionsController");

router.route("/").get("controller");

module.exports = router;