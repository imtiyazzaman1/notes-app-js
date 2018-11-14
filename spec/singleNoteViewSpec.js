describe("Single note view", function() {
  it("initialize with a note", function() {
    note = new Note();
    singleNoteView = new SingleNoteView(note);
    expect(singleNoteView.getNote()).toEqual(note);
  });

  describe('#renderNote', function() {
    it('returns note in HTML', function() {
      note = new Note('Favourite drink: seltzer');
      singleNoteView = new SingleNoteView(note);

      expect(singleNoteView.renderNote())
        .toEqual('<div>Favourite drink: seltzer</div>');
    });
  });
});
