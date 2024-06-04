const express = require("express");
const mongoose = require("mongoose");

//Setup Express Server
const app = express();
app.listen(5000, () => {
  console.log("Server started on port 5000");
});

app.get("/test", (req, res) => {
  res.end("Succesfully exposed Test endpoint!");
  console.log("Test");
});
