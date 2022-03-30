const router = require("express").Router();
const controller = require("../controllers/peopleController");

router.route("/").get("controller");

module.exports = router;