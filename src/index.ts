function editor() {}

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
        this.print(parseInt(args[0]));
        return
      case "4":
        this.undo();
        return
      default:
        throw new Error("Invalid command");        
    }
  }
}
export { editor, Executor };
