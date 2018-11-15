(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteList.add("Favourite drink: seltzer");

    this.noteListView = new NoteListView(this.noteList);
  }

  NoteController.prototype.render = function() {
    document.getElementById('app').innerHTML = this.noteListView.renderView();
  };

  NoteController.prototype.getNotefromUrl = function(hash) {
    return hash.split('/')[1];
  };

  NoteController.prototype.showNote = function (id) {
    var note = this.noteList.notes.find(function (note) {
      return note.getId() == id;
    });
    var view = new SingleNoteView(note);
    return view.renderNote();
  };

  exports.NoteController = NoteController;
})(this);

(function () {
  var noteController = new NoteController(new NoteList());
  noteController.render();
})();
