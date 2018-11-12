var Expect = require("./assert.js")
var describe = require("./assert.js")
var NoteList = require("../src/noteList.js")

function newNoteListIsAnInstanceOfNoteList(){
  var noteList = new NoteList()
  expect.isTrue("new note list is an instance of note list", noteList instanceof NoteList)
}

describe("NoteList can add notes", function(){
    var noteList = new NoteList()
    var double = "A note"
    noteList.add(double)

    new Expect(noteList.getNotes()[0]).toEqual(double)
})


// newNoteListIsAnInstanceOfNoteList()
noteListCanAddNotes()
