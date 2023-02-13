
exports.default = function(app, port) {

  app.get("/url", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
  });
  
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  
}