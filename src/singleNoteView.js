(function(exports) {
  function SingleNoteView(note) {
    this.note = note
  };

  SingleNoteView.prototype.getNote = function() {
    return this.note
  }

  exports.SingleNoteView = SingleNoteView;
})(this);
