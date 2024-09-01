const Router = require("express");
const router = new Router();
const salaryController = require("../controllers/salaryController");
const authMiddleware = require("../middleware/authMiddleware");

router.get(
  "/getOne",
  authMiddleware,
  salaryController.getOne
);
router.post(
  "/calculate",
  authMiddleware,
  salaryController.calculate
);

module.exports = router;
