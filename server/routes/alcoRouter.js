const Router = require("express");
const router = new Router();
const alcoController = require("../controllers/alcoController");

router.post("/add", alcoController.addNewDose);
router.post("/get", alcoController.getYearData);

module.exports = router;
