describe("NoteModel", function(){
  it('creates a new note', function() {
    var newNote = new Note()
    expect(newNote).toBeAnInstanceOf(Note);
  });

  it('create a new note with an id', function() {
    var newNote = new Note("This is a note", 1)
    expect(newNote.getId()).toEqual(1);
  });

  describe("#getText", function(){
    it('gets the text of a note', function() {
      var newNote = new Note("This is a note", 1)
      expect(newNote.getText()).toEqual("This is a note")
    });
  })
})
