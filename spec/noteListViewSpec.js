describe("NoteListView", function() {
  it("initialises with a NoteList object", function() {
    var noteListView = new NoteListView(new NoteList());

    expect(noteListView.noteList).toBeAnInstanceOf(NoteList);
  });
});
