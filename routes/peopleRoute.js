const router = require("express").Router();
const controller = require("../controllers/peopleController");

router.route("/").get(controller.getPeople);
router.route("/:personID").get(controller.findPersonByID);
router.route("/outgoingConnect").get(controller.getPeopleByOutgoingConnectionID)
router
  .route("/incomingConnect")
  .get(controller.getPeopleByIncomingConnectionID);

module.exports = router;