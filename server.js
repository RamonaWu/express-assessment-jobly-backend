"use strict";

const app = require("./app");
const { PORT } = require("./config");

const ipAddress = '127.0.0.1'

app.listen(PORT, function () {
  console.log(`Started on http://${ipAddress}:${PORT}`);
});
