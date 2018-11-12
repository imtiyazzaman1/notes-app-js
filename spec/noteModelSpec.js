var Note = require("../src/noteModel.js")
var {
  Expect,
  describe,
  it
} = require("./assert.js")

describe("noteModel", function(){
  it('create a new note', function() {
    var newNote = new Note()
    new Expect(newNote).toBeAnInstanceOf(Note);
  });

  describe("getText", function(){
    it('gets the text of a note', function() {
      var newNote = new Note("This is a note")
      new Expect(newNote.getText()).toEqual("This is a note")
    });
  })
})
