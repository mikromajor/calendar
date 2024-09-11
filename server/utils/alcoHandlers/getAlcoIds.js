const getAlcoIds = (userId, year, month, day) => {
  const ids = {};
  ids.userId = Number(userId);
  ids.yearId = ids.userId + "_" + year;
  ids.monthId = ids.yearId + "_" + month;
  ids.dayId = ids.monthId + "_" + day;
  return ids;
};
module.exports = { getAlcoIds };
