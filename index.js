const express = require("express");
const http = require("http");

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
  if (err) console.log("error in starting server");
  return console.log("PORT running on ", PORT);
});
