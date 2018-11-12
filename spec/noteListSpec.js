var {
  Expect,
  it
} = require("./assert.js")

var NoteList = require("../src/noteList.js")

function newNoteListIsAnInstanceOfNoteList(){
}

it('new note list is an instance of note list', function() {
  var noteList = new NoteList()
  new Expect(noteList).toBeAnInstanceOf(NoteList)

});


it("NoteList can add notes", function(){
    var noteList = new NoteList()
    var double = "A note"
    noteList.add(double)

    new Expect(noteList.getNotes()[0]).toEqual(double)
})


// newNoteListIsAnInstanceOfNoteList()
// noteListCanAddNotes()
