const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const sequelize = require("./db");
const models = require("./models/models");
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("build"));
app.use("/api", router);
app.use("/years", (req, res) => {
  res.status(200).json({ message: "years path" });
});
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () =>
      console.log(`Server started on port ${PORT}`)
    );
  } catch (e) {
    console.log(e);
  }
};

start();

// remember
// app.use("/api", (req, res) => {
//   res.status(200).json({ message: "api path" });
// });
// app.use("/years", (req, res) => {
//   res.status(200).json({ message: "years path" });
// });
