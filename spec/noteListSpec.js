var {
  Expect,
  describe,
  it
} = require("./assert.js")

var NoteList = require("../src/noteList.js")

describe("noteList", function () {
  it('new note list is an instance of note list', function() {
    var noteList = new NoteList()
    new Expect(noteList).toBeAnInstanceOf(NoteList)
  });

  describe("add", function () {
    it("adds notes to notelist", function(){
      var noteList = new NoteList()
      var double = "A note"
      noteList.add(double)

      new Expect(noteList.getNotes()[0]).toEqual(double)
    })
  })
})
