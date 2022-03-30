const router = require("express").Router();
const controller = require("../controllers/eventsController");

router.route("/").get("controller");

module.exports = router;