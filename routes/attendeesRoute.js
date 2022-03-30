const router = require("express").Router();
const controller = require("../controllers/attendeesController");

router.route("/").get(controller.getAttendeesByEventID);
router.route("/").post(controller.postAttendeeToEvent);
router.route("/").delete(controller.deleteAttendeeToEvent);

module.exports = router;