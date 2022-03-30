const router = require("express").Router();
const controller = require("../controllers/commentsController");

router.route("/").get(controller.getCommentsFromRoom);
router.route("/").post(controller.postComment);

module.exports = router;