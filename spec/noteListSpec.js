var assert = require("./assert.js")
var NoteList = require("../src/noteList.js")

function newNoteListIsAnInstanceOfNoteList(){
  var noteList = new NoteList()
  assert.isTrue("new note list is an instance of note list", noteList instanceof NoteList)
}

function noteListCanAddNotes() {
  var noteList = new NoteList()
  var double = "A note"

  noteList.add(double)

  assert.isTrue("NoteList can add notes", noteList.getNotes()[0] === double)
}

newNoteListIsAnInstanceOfNoteList()
noteListCanAddNotes()
