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
      totalVodka: alcoYear.totalVodka,
      totalBill: alcoYear.totalBill,
      id: year,
      months: [],
    };

    alcoMonths.forEach((m) => {
      const [yearIndex, monthIndex] = m.id.split("_");
      YEAR.months[monthIndex] = {
        totalVodka: m.totalVodka,
        totalBill: m.totalBill,
        id: m.id,
        createdAt: m.createdAt,
        updatedAt: m.updatedAt,
        days: [],
      };
    });

    alcoDays.forEach((d) => {
      const [yearIndex, monthIndex, dayIndex] =
        d.id.split("_");
      YEAR.months[monthIndex].days[dayIndex] = {
        totalVodka: d.totalVodka,
        totalBill: d.totalBill,
        id: d.id,
        createdAt: d.createdAt,
        updatedAt: d.updatedAt,
      };
    });
    return YEAR;
  } catch (error) {
    ApiError.internal("Response model was not create");
  }
};

class AlcoController {
  async addNewDose(req, res, next) {
    //POST http://localhost:7000/api/alco_calendar/add
    // req.body = {year, month, day, additionVodka}
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
          totalVodka: Number(additionVodka),
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
          totalVodka: Number(additionVodka),
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
          totalVodka: Number(additionVodka),
        });
      }
      const response_model = await createResponseModel(
        year,
        req.user.id
      );
      return res.json(response_model);
    } catch (e) {
      ApiError.badRequest(e);
    }
  }

  async getYearData(req, res, next) {
    try {
      const { year } = req.body;
      const response_model = await createResponseModel(
        year,
        req.user.id
      );
      return res.json(response_model);
    } catch (error) {
      ApiError.badRequest(error);
    }
  }
}

module.exports = new AlcoController();
