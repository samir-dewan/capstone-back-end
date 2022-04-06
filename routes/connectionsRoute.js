const router = require("express").Router();
const controller = require("../controllers/connectionsController");

router.route("/").get(controller.getPendingConnections);
router.route("/").post(controller.sendConnection);
router.route("/").put(controller.acceptConnection);

module.exports = router;