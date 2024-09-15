const https = require("https");
const express = require("express");
const cors = require("cors");
// const path = require("path");
require("dotenv").config();
const sequelize = require("./db");
// const models = require("./models/models");
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");

const PORT = process.env.PORT || 5000;

//TODO use typescript
const app = express();
app.use(cors()); // allows to send requests from browser
app.use(express.json()); //allows app to parse .json
app.use(express.static("build"));
app.use("/api", router);
// app.use("/years", (req, res) => {
//   res.status(200).json({ message: "years path" });
// });// testing example
app.use(errorHandler);

// const start = async () => {
//   try {
//     await sequelize.authenticate();
//     await sequelize.sync();
//     app.listen(PORT, () =>
//       console.log(`Server started on port ${PORT}`)
//     );
//   } catch (e) {
//     console.log(e);
//   }
// };

// start();

const startHTTPS = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    https.createServer(app).listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};
startHTTPS();

//openssl genrsa -out key.pem
//openssl req -new -key key.pem -out csr.pem  //=> fix error y create openssl.cnf in c:\Program Files\PostgreSQL\psqlODBC\etc\openssl.cnf
//openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
