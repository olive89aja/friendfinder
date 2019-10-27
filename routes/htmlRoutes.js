
var path = require("path");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/friends.html"));
  });

  app.post("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/friends.html"));
  });


  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
