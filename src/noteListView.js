(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  }

  NoteListView.prototype.renderView = function () {
    var view = '<ul>';
    this.noteList.getNotes().forEach(function (note) {
      view += '<li><div>';
      if (note.getText().length > 20) {
        view += (note.getText().slice(0, 20) + '...');
      } else {
        view += note.getText();
      }
      view += '</div></li>';
    });
    view += '</ul>';
    return view;
  };

  exports.NoteListView = NoteListView;
})(this);
