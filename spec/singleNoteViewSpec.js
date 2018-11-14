describe("Single note view", function() {
  it("initialize with a note", function() {
    note = new Note()
    singleNoteView = new SingleNoteView(note)
    expect(singleNoteView.getNote()).toEqual(note)
  });
});
