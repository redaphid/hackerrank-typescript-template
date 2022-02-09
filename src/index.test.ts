import { editor, Executor } from "./index";
test("Let's get things started", () => {
  expect(editor).toBeDefined();
});
describe("Executor", () => {
  it("should exist", () => {
    expect(Executor).toBeDefined();
  });
  describe("Given an Executor", () => {
    let parser;
    //create a command parser, then spy on it
    beforeEach(() => {
      parser = new Executor();
      jest.spyOn(parser, "append");
      jest.spyOn(parser, "print");
      jest.spyOn(parser, "undo");
    });
    describe("When executing a command that appends 'Aaron'", () => {
      let result
      beforeEach(() => {
        result = parser.execute("1 Aaron");
      });
    });
    it("should call the correct functions", () => {
      expect(parser.append).toHaveBeenCalledWith("Aaron");     
    });
  });
});
