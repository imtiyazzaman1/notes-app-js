describe('NoteController', function() {
  it('can be initialised', function() {
    var noteController = new NoteController(new NoteList());
    expect(noteController).toBeAnInstanceOf(NoteController);
  });

});
