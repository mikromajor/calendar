const {
  AlcoYear,
  AlcoMonth,
  AlcoDay,
} = require("../models/models");
const {
  INIT_ALCO_STATE,
} = require("../constants/initStates");
const ApiError = require("../error/ApiError");
const {
  getDateMonthYear,
} = require("../utils/getDateMonthYear");
const {
  createModelAlcoState,
} = require("../utils/alcoHandlers/createModelAlcoState");

// model ServerRes {
//   user?:{token:string; message:string // for userInfo};
//   message?: string; //for error
//   alcoState?: AlcoState;
//   salary?: ISalaryInit;
// }

class AlcoController {
  async addNewDose(req, res, next) {
    //POST http://localhost:7000/api/alco_calendar/add
    // req.body = {"year":"2020", "month":"1", "day":"1", "additionVodka":"65"}
    try {
      const { year, month, day } = req.body;
      const additionVodka = Number(req.body.additionVodka);

      const userId = Number(req.user.id);
      const yearId = userId + "_" + year;
      const monthId = yearId + "_" + month;
      const dayId = monthId + "_" + day;

      if (year <= 0 || month <= 0 || day <= 0) {
        return res.json(
          ApiError.badRequest("Request's data incorrect")
        );
      }
      // TODO use cycle to check/create DB
      const alcoYear = await AlcoYear.findOne({
        where: { id: yearId },
      });

      if (alcoYear) {
        alcoYear.totalVodka += additionVodka;
        await alcoYear.save();
      } else {
        await AlcoYear.create({
          id: yearId,
          userId,
          totalVodka: additionVodka,
        });
      }

      const alcoMonth = await AlcoMonth.findOne({
        where: { id: monthId },
      });
      if (alcoMonth) {
        alcoMonth.totalVodka += additionVodka;
        await alcoMonth.save();
      } else {
        await AlcoMonth.create({
          id: monthId,
          userId,
          yearId,
          totalVodka: additionVodka,
        });
      }

      const alcoDay = await AlcoDay.findOne({
        where: { id: dayId },
      });
      if (alcoDay) {
        alcoDay.totalVodka += additionVodka;
        await alcoDay.save();
      } else {
        await AlcoDay.create({
          id: dayId,
          monthId,
          yearId,
          userId,
          totalVodka: additionVodka,
        });
      }

      const alcoState = await createModelAlcoState(
        { year, month, day },
        userId,
        next
      );
      return res.json({
        alcoState,
      });
    } catch (e) {
      next(
        ApiError.internal("Error. The new dose wasn't add.")
      );
    }
  }

  async getAlcoYear(req, res, next) {
    //GET http://localhost:7000/api/alco_calendar/get?year=2020&month=1&day=1
    //req.query.year,
    // GET doesn't have req.body

    const { year, month, day } = req.query;

    try {
      const alcoState = await createModelAlcoState(
        { year, month, day },
        Number(req.user.id),
        next
      );
      return res.status(200).json({
        alcoState,
      });
    } catch (error) {
      next(
        ApiError.internal(
          "Server error. AlcoController.getAlcoYear has problem"
        )
      );
    }
  }

  async login(req, res, next) {
    try {
      const [day, month, year] = getDateMonthYear(
        new Date()
      );
      const alcoState = await createModelAlcoState(
        { day, month, year },
        Number(req.user.id),
        next
      );
      return res.status(200).json({
        user: req.user,
        alcoState, // type YearData |null
      });
    } catch (e) {
      //crutches
      next(
        res.status(200).json({
          user: req.user,
          message: "Error in alcoController.login",
        })
        // ApiError.internal("Error in alcoController.login")
      );
    }
  }
}

module.exports = new AlcoController();

// //Note: correct handle error
//     return next(
//       ApiError.badRequest("Request's data incorrect")
//     );
//     next(
//       ApiError.internal(
//         "Server error. AlcoController.getAlcoYear has problem"
//       )
//     );
