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
        enqueue = jest.fn();
        dequeue = jest.fn();
        print = jest.fn();

        cmd = new CmdProcessor(enqueue, dequeue, print);
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
        let input
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
        test("Example 1", () => {
          expect(enqueue).toHaveBeenCalledWith("42");
          expect(dequeue).toHaveBeenCalled();
          expect(print).toHaveBeenCalledWith("14");
        })
      })
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
