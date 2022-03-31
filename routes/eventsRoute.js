const router = require("express").Router();
const controller = require("../controllers/eventsController");

router.route("/").get(controller.getEvents);
router.route("/add").post(controller.postEvents);
router.route("/:eventID").update(controller.updateEvent);
router.route("/:eventID").delete(controller.deleteEvent);

module.exports = router;