import { editor, Executor } from "./index";
test("Let's get things started", () => {
  expect(editor).toBeDefined();
});
describe("Executor", () => {
  it("should exist", () => {
    expect(Executor).toBeDefined();
  });
  describe("Command Parsing", () => {
    let exe;
    //create a command parser, then spy on it
    beforeEach(() => {
      exe = new Executor();
      jest.spyOn(exe, "append");
      jest.spyOn(exe, "delete");
      jest.spyOn(exe, "print");
      jest.spyOn(exe, "undo");
    });
    describe("When executing a command that appends 'Aaron'", () => {
      let result;
      beforeEach(() => {
        result = exe.execute("1 Aaron");
      });
      it("should call the correct functions", () => {
        expect(exe.append).toHaveBeenCalledWith("Aaron");
      });
    });
    describe("when executing the delete command", () => {
      let result;
      beforeEach(() => {
        result = exe.execute("2 10");
      });
      it("should call the correct functions", () => {
        expect(exe.delete).toHaveBeenCalledWith(10);
      });
    })
  });
  describe("When executing a adds a silly string, then prints a char at it's index", () => {
    let exe
    let result;
    beforeEach(() => {
      exe = new Executor();
      exe.append("donovan");
      result = exe.print(1);
    });
    it("should set the buffer to 'donovan'", () => {
      expect(exe.buf).toEqual("donovan");
    });

    it("should call the correct functions", () => {
      expect(result).toEqual("o");
    });
    describe("When deleting the last 2 characters", () => {
      beforeEach(() => {
        exe.delete(2);
      });
      it("should call the correct functions", () => {
        expect(exe.buf).toEqual("donov");
      });
    })
  });
});
