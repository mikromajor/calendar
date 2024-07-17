const Router = require("express");
const router = new Router();
const salaryController = require("../controllers/salaryController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/add", authMiddleware, salaryController.add);
router.get(
  "/getOne",
  authMiddleware,
  salaryController.getOne
);
router.get(
  "/getAll",
  authMiddleware,
  salaryController.getAll
);
router.get(
  "/getLast_2years",
  authMiddleware,
  salaryController.getLast_2years
);

module.exports = router;
