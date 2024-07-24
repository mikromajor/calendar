const {
  AlcoYear,
  AlcoMonth,
  AlcoDay,
} = require("../models/models");
const ApiError = require("../error/ApiError");

//create response models for front-end
const createResponseModel = async (year, userId) => {
  try {
    const alcoYear = await AlcoYear.findOne({
      where: { id: year, userId },
    });

    const alcoMonths = await AlcoMonth.findAll({
      where: { yearId: year, userId },
    });

    const alcoDays = await AlcoDay.findAll({
      where: { yearId: year, userId },
    });

    const YEAR = {
      ...alcoYear.dataValues,
      months: [],
    };

    alcoMonths.forEach((m) => {
      const [yearIndex, monthIndex] = m.id.split("_");
      YEAR.months[monthIndex] = {
        ...m.dataValues,
        days: [],
      };
    });

    alcoDays.forEach((d) => {
      const [yearIndex, monthIndex, dayIndex] =
        d.id.split("_");
      YEAR.months[monthIndex].days[dayIndex] = {
        ...d.dataValues,
      };
    });
    return YEAR;
  } catch (error) {
    return ApiError.internal(
      "Response model was not create"
    );
  }
};

class AlcoController {
  async addNewDose(req, res, next) {
    //POST http://localhost:7000/api/alco_calendar/add
    // req.body = {"year":"2020", "month":"1", "day":"1", "additionVodka":"65"}
    try {
      const { year, month, day, additionVodka } = req.body;
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
      const response_model = await createResponseModel(
        year,
        req.user.id
      );
      return res.json(response_model);
    } catch (e) {
      ApiError.badRequest("It has not been add new dose");
    }
  }

  async getAlcoYear(req, res, next) {
    //GET http://localhost:7000/api/alco_calendar/get?year=2020
    try {
      const response_model = await createResponseModel(
        req.query.year,
        req.user.id
      );
      return res.json(response_model);
    } catch (error) {
      return ApiError.badRequest(
        "Information not found for this year."
      );
    }
  }
}

module.exports = new AlcoController();
