import _ from 'lodash'
class Executor {
  buf: string = '';
  revert: string = '';
  append(s: string) {
    this.revert = `${this.buf}`;
    this.buf+=s
  }
  print(i: number) {
    return this.buf[i]
  }
  delete(i:number) {
    this.revert = `${this.buf}`;
    this.buf = this.buf.slice(0,-i)
  }
  undo() {
    this.buf = `${this.revert}`
  }
  executeAll(commands: string[]):string[]{
    const responses = commands.map(command => {
      return this.execute(command)
    })
    return _.compact(responses)
  }
  execute(s: string) {
    const [command, ...args] = s.split(" ");
    switch (command) {
      case "1":
        this.append(args[0]);
        return;
      case "2":
        this.delete(parseInt(args[0]));
        return
      case "3":
        return this.print(parseInt(args[0]));
      case "4":
        this.undo();
        return
      default:
        throw new Error("Invalid command");        
    }
  }
}
export {Executor };
