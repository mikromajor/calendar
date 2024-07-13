const {
  AlcoYear,
  AlcoMonth,
  AlcoDay,
} = require("../models/models");

class AlcoController {
  async addNewDose(req, res, next) {
    const { year, month, day, additionVodka } = req.body;

    const alcoDay = await AlcoDay.findOne({
      where: { id: year + month + day },
    });

    if (alcoDay) {
      alcoDay.totalVodka += Number(additionVodka);
      await alcoDay.save();
    } else {
      await AlcoDay.create({
        id: year + month + day,
        totalVodka: Number(additionVodka),
      });
    }
    const alcoMonth = await AlcoMonth.findOne({
      where: { id: year + month },
    });

    if (alcoMonth) {
      alcoMonth.totalVodka += Number(additionVodka);
      await alcoMonth.save();
    } else {
      await AlcoMonth.create({
        id: year + month,
        totalVodka: Number(additionVodka),
      });
    }
    let alcoYear = await AlcoYear.findOne({
      where: { id: year },
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
    return res.json(alcoYear);
  }

  async getYearData(req, res, next) {
    const { year } = req.body;
    const alcoYear = await AlcoYear.findOne({
      where: { id: year },
    });
    return res.json(alcoYear);
  }
}

module.exports = new AlcoController();
