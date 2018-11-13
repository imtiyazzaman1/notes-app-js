describe("NoteModel", function(){
  it('creates a new note', function() {
    var newNote = new Note()
    expect(newNote).toBeAnInstanceOf(Note);
  });

  describe("#getText", function(){
    it('gets the text of a note', function() {
      var newNote = new Note("This is a note")
      expect(newNote.getText()).toEqual("This is a note")
    });
  })
})
