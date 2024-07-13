const Router = require("express");
const router = new Router();

// // const salaryRouter = require('./salaryRouter')

const userRouter = require("./userRouter");
// // const alcoRouter = require('./alcoRouter')

// // router.use('/salary', salaryRouter)

router.use("/user", userRouter);
// // router.use('/calendar', alcoRouter)

module.exports = router;
