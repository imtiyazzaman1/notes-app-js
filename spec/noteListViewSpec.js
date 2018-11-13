describe("NoteListView", function() {
  it("initialises with a NoteList object", function() {
    var noteListView = new NoteListView(new NoteList());

    expect(noteListView.noteList).toBeAnInstanceOf(NoteList);
  });

  describe('#renderView', function() {
    it('renders a html of the notes for zero notes', function() {
      var noteList = new NoteList();

      var noteListView = new NoteListView(noteList);

      expect(noteListView.renderView()).toEqual(
        '<ul></ul>'
      );
    });
    it('renders a html of the notes for one note', function() {
      var noteList = new NoteList();
      noteList.add("Pair 1: Henry");

      var noteListView = new NoteListView(noteList);

      expect(noteListView.renderView()).toEqual(
        '<ul><li><div>Pair 1: Henry</div></li></ul>'
      );
    });
    it('renders a html of the notes for two notes', function() {
      var noteList = new NoteList();
      noteList.add("Pair 1: Henry");
      noteList.add("Pair 2: Imtiyaz");

      var noteListView = new NoteListView(noteList);

      expect(noteListView.renderView()).toEqual(
        '<ul><li><div>Pair 1: Henry</div></li><li><div>Pair 2: Imtiyaz</div></li></ul>'
      );
    });
  });
});
