// load the note data from the database json file;
// write new JSON file with FS
const noteData = require("../db/db.json");
const fs = require("fs");
const path = require("path");

let idIncrement = 0;

// routing
module.exports = function (app) {
  // let idIncrement = 0;
  // returns database file as JSON
  app.get("/api/notes", function (req, res) {
    res.json(noteData);
  });

  app.post("/api/notes", function (req, res) {
    const newNote = req.body;

    // give an ID to the note
    idIncrement++;
    newNote.id = idIncrement;

    noteData.push(newNote);

    fs.writeFile(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify(noteData),
      (err) => {
        if (err) throw err;

        console.log("updated db!");
      }
    );

    res.json(newNote);
  });
};
