(function(exports) {
  function NoteList() {
    this.notes = [];
    this.noteId = 0
  }

  NoteList.prototype.uniqueId = function () {
    this.noteId += 1
    return this.noteId
  };

  NoteList.prototype.add = function (text) {
    var note = new Note(text, this.uniqueId());
    this.notes.push(note);
  };

  NoteList.prototype.getNotes = function () {
    return this.notes;
  };

  exports.NoteList = NoteList;
})(this);
