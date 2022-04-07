const router = require("express").Router();
const controller = require("../controllers/peopleController");

router.route("/").get(controller.getPeople);
router.route("/:personID").get(controller.findPersonByID);


module.exports = router;