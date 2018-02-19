const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

const port = process.env.PORT || 1234;
app.listen(port, () => {
  console.log("listening on port: " + port + "!");
});
