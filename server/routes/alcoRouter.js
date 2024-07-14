const Router = require("express");
const router = new Router();
const alcoController = require("../controllers/alcoController");
const authMiddleware = require("../middleware/authMiddleware");

router.post(
  "/add",
  authMiddleware,
  alcoController.addNewDose
);
router.post(
  "/get",
  authMiddleware,
  alcoController.getYearData
);

module.exports = router;
