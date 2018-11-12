var assert = require("./assert.js")
var NoteList = require("../src/noteList.js")

function newNoteListIsAnInstanceOfNoteList(){
  var noteList = new NoteList()
  assert.isTrue("new note list is an instance of note list", noteList instanceof NoteList)
}

newNoteListIsAnInstanceOfNoteList()
