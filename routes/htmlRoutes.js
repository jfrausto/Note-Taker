// file to handle html request
// need Path to resolve file paths when serving html
const path = require("path");

// routes
module.exports = function (app) {
  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
