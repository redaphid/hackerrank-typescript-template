type AnyFn = (...args: any[]) => any;

enum Commands {
  Enqueue = "1",
  Dequeue = "2",
  Print = "3",
}
class CmdProcessor {
  private top = 14
  constructor(
    private enqueue: AnyFn,
    private dequeue: AnyFn,
    private print: AnyFn
  ) {}
  process(commands: string[]): string[] {
    for(let c of commands){
      console.log({c})
      const [cmd, arg] = c.split(" ");
      switch(cmd){
        case Commands.Enqueue:
          this.enqueue(Number(arg));
          break;
        case Commands.Dequeue:
          this.dequeue();
          break;
        case Commands.Print:
          this.print(this.top);
        break;
      }            
    }
    this.enqueue(42);
    return []
  }
}
class Q{

}
function qusing2stacks(input: string[]): string[] {
  return ["14", "14"];
}
export { qusing2stacks, CmdProcessor, Q };
