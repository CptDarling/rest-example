const { response } = require("express");
var express = require("express");
var app = express();

const PORT = 3000;

app.get("/url", (req, res, next) => {
  console.log(req.headers);
  console.log(req.query);
  // res.render()
  res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
