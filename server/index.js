const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../index.html"));
});

const port = process.env.PORT || 1234;
app.listen(port, () => {
  console.log("listening on port: " + port + "!");
});
