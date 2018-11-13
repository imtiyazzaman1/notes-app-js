describe("NoteList", function () {
  it('new note list is an instance of note list', function() {
    var noteList = new NoteList()
    expect(noteList).toBeAnInstanceOf(NoteList)
  });

  describe("#add", function () {
    it("adds notes to notelist", function(){
      var noteList = new NoteList()
      var double = "A note"
      noteList.add(double)

      expect(noteList.getNotes()[0]).toEqual(double)
    })
  })
})
