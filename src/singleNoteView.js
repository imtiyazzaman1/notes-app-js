(function(exports) {
  function SingleNoteView(note) {
    this.note = note;
  }

  SingleNoteView.prototype.getNote = function() {
    return this.note;
  };

  SingleNoteView.prototype.renderNote = function () {
    return '<div>' + this.note.getText() + '</div>';
  };

  exports.SingleNoteView = SingleNoteView;
})(this);
