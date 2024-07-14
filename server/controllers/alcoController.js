const {
  AlcoYear,
  AlcoMonth,
  AlcoDay,
} = require("../models/models");

class AlcoController {
  async addNewDose(req, res, next) {
    const { year, month, day, additionVodka } = req.body;
    const dayId = year + "_" + month + "_" + day;
    const monthId = year + "_" + month;
    const yearId = year;

    let alcoYear = await AlcoYear.findOne({
      where: { id: yearId },
    });

    if (alcoYear) {
      alcoYear.totalVodka += Number(additionVodka);
      await alcoYear.save();
    } else {
      alcoYear = await AlcoYear.create({
        id: year,
        totalVodka: Number(additionVodka),
      });
    }

    let alcoMonth = await AlcoMonth.findOne({
      where: { id: monthId },
    });
    if (alcoMonth) {
      alcoMonth.totalVodka += Number(additionVodka);
      await alcoMonth.save();
    } else {
      alcoMonth = await AlcoMonth.create({
        id: monthId,
        yearId,
        totalVodka: Number(additionVodka),
      });
    }
    const alcoMonths = await AlcoMonth.findAll({
      where: { yearId },
    });

    let alcoDay = await AlcoDay.findOne({
      where: { id: dayId },
    });
    if (alcoDay) {
      //await alcoDay.increment({totalVodka:additionVodka}, {where:{id:dayId}})
      alcoDay.totalVodka += Number(additionVodka);
      await alcoDay.save();
    } else {
      alcoDay = await AlcoDay.create({
        id: dayId,
        monthId,
        yearId,
        totalVodka: Number(additionVodka),
      });
    }
    const alcoDays = await AlcoDay.findAll({
      where: { yearId },
    });

    // create front-end store model (INIT_YEAR)

    const YEAR = {
      ...alcoYear,
      months: [],
    };

    alcoMonths.forEach((m) => {
      const [yearIndex, monthIndex] = m.id.split("_");
      YEAR.months[monthIndex] = { ...m, days: [] };
    });

    alcoDays.forEach((d) => {
      const [yearIndex, monthIndex, dayIndex] =
        d.id.split("_");
      YEAR.months[monthIndex].days[dayIndex] = d;
    });

    return res.json(YEAR);
  }

  async getYearData(req, res, next) {
    const { year } = req.body;
    const alcoYear = await AlcoYear.findOne({
      where: { id: year },
    });
    return res.json({ alcoYear });
  }
}

module.exports = new AlcoController();
