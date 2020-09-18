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

    // if there are no notes,
    if (noteData.length === 0) {
      // give the new note an id of 1
      newNote.id = "1";
    } else {
      // if we have at least one note,
      // grab the last note in the array, and add 1 to it
      // after parsing between string and int
      idIncrement = parseInt(noteData[noteData.length - 1].id) + 1;
      newNote.id = idIncrement.toString();
    }
    // give an ID to the note
    noteData.push(newNote);

    // write file all the way into the directory of the db
    // stringify the json to write the file
    fs.writeFile(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify(noteData),
      (err) => {
        if (err) throw err;
        console.log("---- added a new note! ----");
      }
    );

    res.json(newNote);
  });

  // delete method
  app.delete("/api/notes/:id", function (req, res) {
    const deleteID = req.params.id;
    // console.log(deleteID);
    // console.log(req.body);
    // const index = noteData.indexOf()
    // go through each note and find the note to delete
    noteData.forEach((note) => {
      if (deleteID === note.id) {
        const index = noteData.indexOf(note);
        noteData.splice(index, 1);
      }
    });
    // rewrite note db with update
    fs.writeFile(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify(noteData),
      (err) => {
        if (err) throw err;

        console.log("---- deleted a note! ----");
      }
    );
    res.send("We have deleted a note...");
  });
};
