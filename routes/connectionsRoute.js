const router = require("express").Router();
const controller = require("../controllers/connectionsController");

router.route("/").get(connector.getPendingConnections);
router.route("/").post(connector.acceptConnection);

module.exports = router;