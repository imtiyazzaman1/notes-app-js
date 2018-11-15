(function(exports) {
  function SingleNoteView(note) {
    this.note = note;
  }

  SingleNoteView.prototype.getNote = function() {
    return this.note;
  };

  SingleNoteView.prototype.renderNote = function () {
    return document
      .getElementById("note")
      .innerHTML = '<div>' + this.note.getText() + '</div>';
    // return ;
  };

  exports.SingleNoteView = SingleNoteView;
})(this);
