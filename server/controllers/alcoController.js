const {
  AlcoYear,
  AlcoMonth,
  AlcoDay,
} = require("../models/models");
const ApiError = require("../error/ApiError");
const {
  getDateMonthYear,
} = require("../utils/getDateMonthYear");
//create response models for front-end equal INIT_ALCO_YEAR

const createModelAlcoState = async (
  currentDate,
  userId,
  next
) => {
  const year = currentDate.year;
  const INIT_ALCO_YEAR = {
    totalVodka: 0,
    totalBill: 0,
    months: [],
  };
  const alcoState = {
    currentDate,
    yearData: INIT_ALCO_YEAR,
  };

  try {
    const alcoYear = await AlcoYear.findOne({
      where: { id: year, userId },
    });
    if (!alcoYear) {
      return alcoState;
    }

    const alcoMonths = await AlcoMonth.findAll({
      where: { yearId: year, userId },
    });

    const alcoDays = await AlcoDay.findAll({
      where: { yearId: year, userId },
    });

    const yearData = {
      ...alcoYear.dataValues,
      months: [],
    };

    alcoMonths.forEach((m) => {
      const [yearIndex, monthIndex] = m.id.split("_");
      yearData.months[monthIndex] = {
        ...m.dataValues,
        days: [],
      };
    });

    alcoDays.forEach((d) => {
      const [yearIndex, monthIndex, dayIndex] =
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
      const { year, month, day, additionVodka } = req.body;
      if (
        year <= 0 ||
        month <= 0 ||
        day <= 0 ||
        isNaN(additionVodka)
      ) {
        return res.json(
          ApiError.badRequest("Request's data incorrect")
        );
      }

      const dayId = year + "_" + month + "_" + day;
      const monthId = year + "_" + month;

      const alcoYear = await AlcoYear.findOne({
        where: { id: year, userId: req.user.id },
      });
      if (alcoYear) {
        alcoYear.totalVodka += Number(additionVodka);
        await alcoYear.save();
      } else {
        await AlcoYear.create({
          id: year,
          userId: req.user.id,
          totalVodka: additionVodka,
        });
      }

      const alcoMonth = await AlcoMonth.findOne({
        where: { id: monthId, userId: req.user.id },
      });
      if (alcoMonth) {
        alcoMonth.totalVodka += Number(additionVodka);
        await alcoMonth.save();
      } else {
        await AlcoMonth.create({
          id: monthId,
          userId: req.user.id,
          yearId: year,
          totalVodka: additionVodka,
        });
      }

      const alcoDay = await AlcoDay.findOne({
        where: { id: dayId, userId: req.user.id },
      });
      if (alcoDay) {
        alcoDay.totalVodka += Number(additionVodka);
        await alcoDay.save();
      } else {
        await AlcoDay.create({
          id: dayId,
          userId: req.user.id,
          monthId,
          yearId: year,
          totalVodka: additionVodka,
        });
      }

      const alcoState = await createModelAlcoState(
        { year, month, day },
        req.user.id,
        next
      );
      return res.status(200).json({
        ...req.user,
        alcoState, // type alcoState |null
      });
    } catch (e) {
      return ApiError.internal(
        "Error. The new dose wasn't add."
      );
    }
  }

  async getAlcoYear(req, res, next) {
    //GET http://localhost:7000/api/alco_calendar/get
    //req.body = {"year":"2020", "month":"1", "day":"1"}
    try {
      // const {year, month, day} = req.body
      const alcoState = await createModelAlcoState(
        req.body,
        req.user.id
      );
      return res.status(200).json({
        ...req.user,
        alcoState, // type YearData |null
      });
    } catch (error) {
      return ApiError.internal(
        "Server error. AlcoController.getAlcoYear has problem"
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
        req.user.id,
        next
      );
      return res.status(200).json({
        ...req.user,
        alcoYear: alcoState, // type YearData |null
      });
    } catch (e) {
      return ApiError.internal(
        "Error in alcoController.login"
      );
    }
  }
}

module.exports = new AlcoController();

//GET http://localhost:7000/api/alco_calendar/get?year=2020
//req.query.year,
