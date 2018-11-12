var Note = require("../src/noteModel.js")
var assert = require("./assert.js")

function newNoteIsAnInstanceOfNote() {
  var newNote = new Note()
  assert.isTrue("Creating a new note", newNote instanceof Note)
}

function newNoteTakeTextWhenIntialized() {
  var newNote = new Note("This is a note")
  assert.equals("Setting the text of a new note",
    newNote.getText(), "This is a note")
}

newNoteIsAnInstanceOfNote()
newNoteTakeTextWhenIntialized()
