const updateAlcoDB = async (DB, createAlcoDB_Data) => {
  const { totalVodka, id } = createAlcoDB_Data;

  const alcoDB = await DB.findOne({
    where: { id },
  });
  console.log("DB", DB);
  !!alcoDB
    ? ((alcoDB.totalVodka += totalVodka),
      await alcoDB.save())
    : await DB.create(createAlcoDB_Data);
};
module.exports = { updateAlcoDB };
