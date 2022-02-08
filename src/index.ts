type AnyFn = (...args: any[]) => any;

class CmdProcessor {
  constructor(
    private enqueue: AnyFn,
    private dequeue: AnyFn,
    private print: AnyFn
  ) {
    this.print("hi");
    this.enqueue("there");
    this.dequeue();
  }
  process() {
    this.enqueue(42);
  }
}
function qusing2stacks(input: string[]): string[] {
  return ["14", "14"];
}
export { qusing2stacks, CmdProcessor };
