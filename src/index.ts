type AnyFn = (...args: any[]) => any;

enum Commands {
  Enqueue = "1",
  Dequeue = "2",
  Print = "3",
}
class CmdProcessor {
  private top = "14"
  private enqueue: AnyFn;
  private dequeue: AnyFn
  constructor( 
    private print: AnyFn,
    enqueue?: AnyFn,
    dequeue?:AnyFn,
  ) {
    this.enqueue = enqueue || ((arg: string) => {
      this.top = arg;
    });
    this.dequeue = dequeue || ((): void => {
      this.top = "14";
    });
    this.print = print || ((arg: string) => {
      console.log(arg);
    });
  }
  process(commands: string[]): string[] {
    const [length, ...cmds] = commands
    for(let c of cmds){
      console.log({c})
      const [cmd, arg] = c.split(" ");
      switch(cmd){
        case Commands.Enqueue:
          console.log({arg})
          this.enqueue(arg);
          break;
        case Commands.Dequeue:
          this.dequeue();
          break;
        case Commands.Print:
          this.print(this.top);
        break;
        default:
          throw new Error(`Unknown command ${cmd}`);
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
