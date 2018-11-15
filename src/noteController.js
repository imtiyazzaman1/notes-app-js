(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteList.add("Favourite drink: seltzer");
    this.noteList.add("Fa: seltzer");

    this.noteListView = new NoteListView(this.noteList);
  }

  NoteController.prototype.render = function() {
    document.getElementById('app').innerHTML = this.noteListView.renderView();
  };

  NoteController.prototype.makeUrlChangeShowNoteForCurrentPage = function() {
    window.addEventListener("hashchange", () => {
      this.showNoteForCurrentPage()
    });
  }

  NoteController.prototype.showNoteForCurrentPage = function() {
    this.showNote(this.getNotefromUrl(window.location.hash))
  }

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
  noteController.makeUrlChangeShowNoteForCurrentPage();
})();
