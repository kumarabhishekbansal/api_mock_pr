var express = require("express");
var apiMocker = require("connect-api-mocker");
const { notFound } = require("connect-api-mocker/helpers");

var app = express();
app.use(notFound("Page is not found"));
app.use("/api", apiMocker("mocks/api"));

app.listen(8080, () => {
  console.log("server is listen at port no. 8080");
});
