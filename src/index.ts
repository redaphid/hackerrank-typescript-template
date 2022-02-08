type AnyFn = (...args: any[]) => any;

enum Commands {
  Enqueue = "1",
  Dequeue = "2",
  Print = "3",
}
class CmdProcessor {
  private enqueue: AnyFn;
  private dequeue: AnyFn;
  private q: string[] = [];
  constructor( 
    private print: AnyFn,
    enqueue?: AnyFn,
    dequeue?:AnyFn,
  ) {
    this.enqueue = enqueue || ((arg: string) => {
      this.q.push(arg);
    });
    this.dequeue = dequeue || ((): void => {
      this.q.shift();
    });
  }
  process(commands: string[]): string[] {
    const [length, ...cmds] = commands
    for(let c of cmds){
      // console.log({c})
      const [cmd, arg] = c.split(" ");
      switch(cmd){
        case Commands.Enqueue:
          // console.log({arg})
          this.enqueue(arg);
          break;
        case Commands.Dequeue:
          this.dequeue();
          break;
        case Commands.Print:
          this.print(this.q[0]);
        break;
        default:
          throw new Error(`Unknown command ${cmd}`);
      }            
    }
    this.enqueue(42);
    return []
  }
}

export { CmdProcessor,};
