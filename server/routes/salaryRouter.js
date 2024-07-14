const Router = require("express");
const router = new Router();
const salaryController = require("../controllers/salaryController");
// TODO check valid '/' or ''
router.post("/", salaryController.add);
router.get("/:year:month", salaryController.getOne);
router.get("/", salaryController.getAll);

module.exports = router;
