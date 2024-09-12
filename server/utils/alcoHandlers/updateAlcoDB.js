const updateAlcoDB = async (DB, createAlcoDB_Data) => {
  const { additionVodka, id } = createAlcoDB_Data;

  const alcoDB = await DB.findOne({
    where: { id },
  });

  alcoDB
    ? (alcoDB.totalVodka += additionVodka)
    : await alcoDB.create(createAlcoDB_Data);

  await alcoDB.save();
};
module.exports = { updateAlcoDB };
