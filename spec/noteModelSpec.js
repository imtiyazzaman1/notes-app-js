var Note = require("../src/noteModel.js")
var {
  expect,
  describe,
  it,
  Matchers
} = require("./assert.js")

describe("NoteModel", function(){
  // it('create a new note', function() {
  //   var newNote = new Note()
  //   new Expect(newNote).toBeAnInstanceOf(Note);
  // });

  describe("#getText", function(){
    it('gets the text of a note', function() {
      var newNote = new Note("This is a note")
      console.log(expect(newNote.getText()));
      expect(newNote.getText()).toEqual("This is a note")
    });
  })
})
