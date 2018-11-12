function newNoteIsAnInstanceOfNote() {
  var newNote = new Note()
  assert.isTrue(newNote instanceof Note)
}

newNoteIsAnInstanceOfNote()
