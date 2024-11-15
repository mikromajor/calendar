const {
  AlcoYear,
  AlcoMonth,
  AlcoDay,
} = require("../models/models");
const {
  INIT_ALCO_STATE,
} = require("../constants/initStates");
const ApiError = require("../error/ApiError");
const getCurrentDate = require("../utils/getCurrentDate");
const createModelAlcoState = require("../utils/alcoHandlers/createModelAlcoState");
const {
  updateAlcoDB,
} = require("../utils/alcoHandlers/updateAlcoDB");
const {
  getAlcoIds,
} = require("../utils/alcoHandlers/getAlcoIds");

// model ServerRes {
//   token?:string;
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

      const { userId, dayId, monthId, yearId } = getAlcoIds(
        req.user.id,
        year,
        month,
        day
      );

      await updateAlcoDB(AlcoYear, {
        id: yearId,
        userId,
        totalVodka: additionVodka,
      });
      await updateAlcoDB(AlcoMonth, {
        id: monthId,
        userId,
        yearId,
        totalVodka: additionVodka,
      });
      await updateAlcoDB(AlcoDay, {
        id: dayId,
        monthId,
        yearId,
        userId,
        totalVodka: additionVodka,
      });

      const alcoState = await createModelAlcoState(userId, {
        year,
        month,
        day,
      });
      return res.json(alcoState);
    } catch (e) {
      next(
        ApiError.internal("Error. The new dose wasn't add.")
      );
    }
  }

  async getAlcoYear(req, res, next) {
    //GET http://localhost:7000/api/alco_calendar/get?year=2020&month=1&day=1
    //req.query.year,
    try {
      const { year, month, day } = req.query;
      const alcoState = await createModelAlcoState(
        req.user.id,
        { year, month, day }
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
    const { alcoState, errorMessage } =
      await createModelAlcoState(req.user.id);
    return errorMessage
      ? res.status(200).json({
          message: req.user.message + "//" + errorMessage,
          alcoState: INIT_ALCO_STATE,
          token: req.user.token,
        })
      : res.status(200).json({
          token: req.user.token,
          message: req.user.message,
          alcoState, // type YearData |null
        });
  }
}
module.exports = new AlcoController();
