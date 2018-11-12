function Note(text) {
  this.text = text
}

Note.prototype.getText = function () {
  return this.text
};

module.exports = Note
