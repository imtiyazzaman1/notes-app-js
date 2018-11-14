describe("NoteList", function () {
  it('new note list is an instance of note list', function() {
    var noteList = new NoteList()
    expect(noteList).toBeAnInstanceOf(NoteList)
  });

  describe("#getNotes", function () {
    it("adds notes to notelist", function(){
      var noteList = new NoteList()
      var double = "A note"
      noteList.notes = [double]

      expect(noteList.getNotes()[0]).toEqual(double)
    })

    describe('#add', function() {
      it('creates and stores a note object with the given text', function() {
        var noteList = new NoteList()
        noteList.add("Add a note")

        expect(noteList.getNotes()[0].getText()).toEqual("Add a note");
      });
      it('creates notes with a unique ID', function() {
        var noteList = new NoteList()
        noteList.add("This is note1")
        noteList.add("This is note2")
        expect(noteList.getNotes()[0].getId()).toEqual(1)
        expect(noteList.getNotes()[1].getId()).toEqual(2)
      })
    });
  })
})
