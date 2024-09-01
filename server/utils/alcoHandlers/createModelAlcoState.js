const {
  AlcoYear,
  AlcoMonth,
  AlcoDay,
} = require("../../models/models");
const {
  INIT_ALCO_STATE,
} = require("../../constants/initStates");
const ApiError = require("../../error/ApiError");
const { getDateMonthYear } = require("../getDateMonthYear");

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
module.exports = { createModelAlcoState };
