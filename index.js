const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());

// Import db
require("./app/configs/mongoDB");

// root
const rootRoute = require("./app/routes/index");

// apply routes
app.use("/api/v1/", rootRoute);

// Port status
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
