var Note = require("../src/noteModel.js")
var {
  Expect,
  it
} = require("./assert.js")

it('create a new note', function() {
  var newNote = new Note()
  new Expect(newNote).toBeAnInstanceOf(Note);
});


it('sets the text of a note', function() {
  var newNote = new Note("This is a note")
  new Expect(newNote.getText()).toEqual("This is a note")
});

// newNoteIsAnInstanceOfNote()
// newNoteTakeTextWhenIntialized()
