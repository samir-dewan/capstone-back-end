const router = require("express").Router();
const controller = require("../controllers/peopleController");

router.route("/").get(controller.getPeople);
router.route("/:personID").get(controller.findPersonByID);
router.route("/outgoingconnect/:personID").get(controller.getPeopleByOutgoingConnectionID);
router.route("/incomingconnect/:personID").get(controller.getPeopleByIncomingConnectionID);

module.exports = router;