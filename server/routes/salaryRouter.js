const Router = require("express");
const router = new Router();
const salaryController = require("../controllers/salaryController");
const authMiddleware = require("../middleware/authMiddleware");
const salaryRequestValidation = require("../middleware/salaryRequestValidation");

router.get(
  "/getOne",
  authMiddleware,
  salaryRequestValidation,
  salaryController.getOne
);
router.post(
  "/calculate",
  authMiddleware,
  salaryRequestValidation,
  salaryController.calculate
);

module.exports = router;
