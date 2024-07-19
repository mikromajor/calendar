const Router = require("express");
const router = new Router();
const alcoController = require("../controllers/alcoController");
const authMiddleware = require("../middleware/authMiddleware");

router.post(
  "/add",
  authMiddleware,
  alcoController.addNewDose
);
router.get(
  "/get",
  authMiddleware,
  alcoController.getAlcoYear
);

module.exports = router;
