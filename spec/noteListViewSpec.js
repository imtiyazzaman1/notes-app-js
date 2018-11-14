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
        '<ul><li><div><a href="#notes/1">Pair 1: Henry</a></div></li></ul>'
      );
    });
    it('renders a html of the notes for two notes', function() {
      var noteList = new NoteList();
      noteList.add("Pair 1: Henry");
      noteList.add("Pair 2: Imtiyaz");

      var noteListView = new NoteListView(noteList);
      expect(noteListView.renderView()).toEqual(
        '<ul><li><div><a href="#notes/1">Pair 1: Henry</a></div></li><li><div><a href="#notes/2">Pair 2: Imtiyaz</a></div></li></ul>'
      );
    });
    it('renders a html with only the first 20 chars of note', function() {
      var noteList = new NoteList();
      noteList.add("Favourite drink: seltzer");

      var noteListView = new NoteListView(noteList);
      expect(noteListView.renderView()).toEqual(
        '<ul><li><div><a href="#notes/1">Favourite drink: sel...</a></div></li></ul>'
      );
    });
  });
});
