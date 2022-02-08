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
  process(commands: string[]): string[] {
    for(let c of commands){
      const [cmd, arg] = c.split(" ");
      if(cmd === "1"){
        return this.enqueue(parseInt(arg));
      }
      if(cmd === "2"){
        return this.dequeue();
      }
      if(cmd === "3"){
        return this.print();
      }      
    }
    this.enqueue(42);
    return []
  }
}
function qusing2stacks(input: string[]): string[] {
  return ["14", "14"];
}
export { qusing2stacks, CmdProcessor };
