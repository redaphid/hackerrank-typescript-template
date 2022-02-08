import { qusing2stacks, CmdProcessor, Q } from ".";
describe("qusing2stacks", () => {
  test("Smoke test", () => {
    const input = [
      "10",
      "1 42",
      "2",
      "1 14",
      "3",
      "1 28",
      "3",
      "1 60",
      "1 78",
      "2",
      "2",
    ];
    const expected = ["14", "14"];
    expect(qusing2stacks(input)).toEqual(expected);
  });

  describe("CmdProcessor", () => {
    it("should exist", () => {
      expect(CmdProcessor).toBeDefined();
    });
    describe("When constructed with enqueue, dequeue, and print fns", () => {
      let cmd;
      let enqueue, dequeue, print;
      beforeEach(() => {
        print = jest.fn();
        enqueue = jest.fn();
        dequeue = jest.fn();
        cmd = new CmdProcessor(print, enqueue, dequeue);
      });
      it("should exist", () => {
        expect(cmd).toBeDefined();
      });
      describe("Given an enqueue command", () => {
        let input;
        let result;
        beforeEach(() => {
          input = ["10", "1 42"];
          result = cmd.process(input);
        });
        it("should have called the enqueue w/42", () => {
          expect(enqueue).toHaveBeenCalledWith("42");
        });
      });
      describe("Given the example list of commands", () => {
        let input;
        beforeEach(() => {
          input = [
            "10",
            "1 42",
            "2",
            "1 14",
            "3",
            "1 28",
            "3",
            "1 60",
            "1 78",
            "2",
            "2",
          ];
          cmd.process(input);
        });
        xtest("Example 1", () => {
          expect(enqueue).toHaveBeenCalledWith("42");
          expect(print).toHaveBeenCalledWith("14");
          expect(enqueue).toHaveBeenCalledWith("28");
          expect(print).toHaveBeenCalledWith("14");
          expect(enqueue).toHaveBeenCalledWith("60");
          expect(enqueue).toHaveBeenCalledWith("78");
          expect(dequeue).toHaveBeenCalledTimes(3);
          expect(dequeue).toHaveBeenCalled();
        });
      });
    });
    describe("Using the actual queue", () => {
      let input;
      let cmd
      let print
      beforeEach(() => {
        print = jest.fn();
        cmd = new CmdProcessor(print);
        input = [
          "WHATEVER",
          "1 42",
          "1 903",
          "3", //42
          "2",
          "3", //903
          "1 10",
          "3", //903
          "1 78",
          "2",
          "2",
        ];
        cmd.process(input);
      });
      test("Different EX", () => {
        expect(print).toHaveBeenCalledWith("42");
        expect(print).toHaveBeenCalledWith("903");
        expect(print).not.toHaveBeenCalledWith("10");
      });
    });
  });
  describe("Queue", () => {
    let q;
    beforeEach(() => {
      q = new Q();
    });
    test("should exist", () => {
      expect(q).toBeDefined();
    });
  });
});
