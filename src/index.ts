function editor() {}

class Executor {
  append(s: string) {}
  print(i: number) {}
  undo() {}
  execute(s: string) {
    const [command, ...args] = s.split(" ");
    switch (command) {
      case "1":
        this.append(args[0]);
        return
      case "2":
        this.print(parseInt(args[0]));
        return
      case "3":
        this.undo();
        return
      default:
        throw new Error("Invalid command");
        return
    }
  }
}
export { editor, Executor };
