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

  exports.NoteController = NoteController;
})(this);

(function () {
  var noteController = new NoteController(new NoteList());
  noteController.render();
})();
