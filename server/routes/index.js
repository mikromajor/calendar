const Router = require("express");
const router = new Router();

// // const salaryRouter = require('./salaryRouter')
// // router.use('/salary', salaryRouter)

const userRouter = require("./userRouter");
const alcoRouter = require("./alcoRouter");

router.use("/user", userRouter);
router.use("/alco_calendar", alcoRouter);

module.exports = router;
