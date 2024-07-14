const Router = require("express");
const router = new Router();
const salaryController = require("../controllers/salaryController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, salaryController.add);
router.get("/", authMiddleware, salaryController.getOne);
router.get("/", authMiddleware, salaryController.getAll);

module.exports = router;
