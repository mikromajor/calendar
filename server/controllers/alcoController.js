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

//creating response models like INIT_ALCO_STATE
const createModelAlcoState = async (
  currentDate,
  userId,
  next
) => {
  const yearId = userId + "_" + currentDate.year;

  const alcoState = {
    ...INIT_ALCO_STATE,
    currentDate,
  };

  try {
    const alcoYear = await AlcoYear.findOne({
      where: { id: yearId },
    });
    if (!alcoYear) {
      return alcoState;
    }

    const alcoMonths = await AlcoMonth.findAll({
      where: { yearId },
    });

    const alcoDays = await AlcoDay.findAll({
      where: { yearId },
    });

    const yearData = {
      ...alcoYear.dataValues,
      months: [],
    };

    alcoMonths.forEach((m) => {
      const [userIndex, yearIndex, monthIndex] =
        m.id.split("_");
      yearData.months[monthIndex] = {
        ...m.dataValues,
        days: [],
      };
    });

    alcoDays.forEach((d) => {
      const [userIndex, yearIndex, monthIndex, dayIndex] =
        d.id.split("_");
      yearData.months[monthIndex].days[dayIndex] = {
        ...d.dataValues,
      };
    });

    alcoState.yearData = yearData;

    return alcoState;
  } catch (error) {
    next(
      ApiError.internal("Response model was not create")
    );
  }
};

class AlcoController {
  async addNewDose(req, res, next) {
    //POST http://localhost:7000/api/alco_calendar/add
    // req.body = {"year":"2020", "month":"1", "day":"1", "additionVodka":"65"}
    try {
      const { year, month, day } = req.body; //string
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

      const alcoYear = await AlcoYear.findOne({
        where: { userId, id: yearId },
      });

      if (!!alcoYear) {
        alcoYear.totalVodka += additionVodka;
        await alcoYear.save();
      } else {
        await AlcoYear.create({
          id: yearId,
          userId,
          totalVodka: additionVodka,
        });
      }
      let y = await AlcoYear.findOne({
        where: { userId, id: yearId },
      });
      //--above tested, bellow - not ---//
      const alcoMonth = await AlcoMonth.findOne({
        where: { id: monthId, userId },
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
        where: { id: dayId, userId },
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
      return res.status(200).json({
        token: req.user.token,
        message: req.user.message,
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
    // GET don't has req.body

    const { year, month, day } = req.query;

    try {
      const alcoState = await createModelAlcoState(
        { year, month, day },
        Number(req.user.id),
        next
      );
      return res.status(200).json({
        token: req.user.token,
        message: req.user.message,
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
        token: req.user.token,
        message: req.user.message,
        alcoState, // type YearData |null
      });
    } catch (e) {
      next(
        ApiError.internal("Error in alcoController.login")
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
