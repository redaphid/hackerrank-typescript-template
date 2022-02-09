function editor() {}

class Executor {
  buf: string = '';
  append(s: string) {
    this.buf+=s
  }
  print(i: number) {
    return this.buf[i]
  }
  delete(i:number) {}
  undo() {}
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
