const express = require("express");
const app = express();

app.use(express.static(__dirname + "/../public"));

const port = process.env.PORT || 1234;
app.listen(port, () => {
  console.log("listening on port: " + port + "!");
});
