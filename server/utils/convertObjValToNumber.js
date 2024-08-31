const convertObjValToNumber = (obj) => {
  Object.keys(obj).forEach(
    (key) => (obj[key] = Number(obj[key]))
  );
  return obj;
};
module.exports = { convertObjValToNumber };
