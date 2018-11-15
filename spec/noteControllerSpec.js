describe('NoteController', function() {
  it('can be initialised', function() {
    var noteController = new NoteController(new NoteList());
    expect(noteController).toBeAnInstanceOf(NoteController);
  });

  it('renders a view', function() {
    var node = document.createElement('div');
    node.setAttribute('id', 'app');
    document.body.appendChild(node);

    var noteController = new NoteController(new NoteList());

    noteController.render();

    expect(document.getElementById('app').innerHTML).toEqual('<ul><li><div><a href="#notes/1">Favourite drink: sel...</a></div></li></ul>');
  });

  it('can get the note ID from a url', function() {
    var hash = "#notes/1"
    var noteController = new NoteController(new NoteList());
    expect(noteController.getNotefromUrl(hash)).toEqual("1")
  });

});
