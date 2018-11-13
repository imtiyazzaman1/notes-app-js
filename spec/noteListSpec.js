var {
  expect,
  describe,
  it,
  Matchers
} = require("./assert.js")

var NoteList = require("../src/noteList.js")

describe("noteList", function () {
  it('new note list is an instance of note list', function() {
    var noteList = new NoteList()
    expect(noteList).toBeAnInstanceOf(NoteList)
  });

  describe("#add", function () {
    it("adds notes to notelist", function(){
      var noteList = new NoteList()
      var double = "A note"
      var duble = "Anote"
      noteList.add(double)

      expect(noteList.getNotes()[0]).toEqual(duble)
    })
  })
})
