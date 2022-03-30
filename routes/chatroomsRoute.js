const router = require("express").Router();
const controller = require("../controllers/chatroomsController");

router.route("/").get(controller.getChatroomsForID);
router.route("/add").post(controller.postChatroomForID);

module.exports = router;