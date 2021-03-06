// file to handle html request
// need Path to resolve file paths when serving html
const path = require("path");

// routes
// serves two html pages
module.exports = function (app) {
  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
  // catch all * select for any other route
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
