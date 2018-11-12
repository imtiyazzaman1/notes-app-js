var Note = require("../src/noteModel.js")
var Expect = require("./assert.js")

function newNoteIsAnInstanceOfNote() {
  var newNote = new Note()
  expect.isTrue("Creating a new note", newNote instanceof Note)
}

function newNoteTakeTextWhenIntialized() {
  var newNote = new Note("This is a note")
  new Expect(newNote.getText()).toEqual("Setting the text of a new note", "This is a note")
}

// newNoteIsAnInstanceOfNote()
newNoteTakeTextWhenIntialized()
