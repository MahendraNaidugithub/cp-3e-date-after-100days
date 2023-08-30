const express = require("express");
const app = express();
var addDays = require("date-fns/addDays");

app.get("/", (request, response) => {
  const todayDate = new Date();
  const result = addDays(
    new Date(
      todayDate.getFullYear(),
      todayDate.getMonth(),
      todayDate.getDate()
    ),
    100
  );

  response.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`
  );
});
module.exports = app;
