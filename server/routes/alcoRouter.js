const Router = require("express");
const router = new Router();
const alcoController = require("../controllers/alcoController");
const authMiddleware = require("../middleware/authMiddleware");
const dateValidation = require("../middleware/alcoRequestValidation");

router.post(
  "/add",
  authMiddleware,
  dateValidation,
  alcoController.addNewDose
);
router.get(
  "/get",
  authMiddleware,
  dateValidation,
  alcoController.getAlcoYear
);

module.exports = router;
