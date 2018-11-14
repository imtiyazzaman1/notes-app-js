(function(exports) {
  function Note(text, id) {
    this.id = id
    this.text = text
  }

  Note.prototype.getId = function () {
    return this.id
  };

  Note.prototype.getText = function () {
    return this.text
  };

  exports.Note = Note;
})(this);
