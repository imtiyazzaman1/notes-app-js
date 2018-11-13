(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteList.add("Favourite drink: seltzer");

    this.noteListView = new NoteListView(this.noteList);
  }

  var noteController = new NoteController(new NoteList());

  document.getElementById('app').innerHTML = noteController.noteListView.renderView();

})(this);
