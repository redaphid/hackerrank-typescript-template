import _ from "lodash";
const openersToClosers = {
  "{": "}",
  "[": "]",
};
const openers = _.keys(openersToClosers);
const closers = _.values(openersToClosers);
function balanced(s: string): boolean {
  if (s.length % 2 !== 0) return false;
  
  const iStack = s.split("");
  const oStack: string[] = [];  

  while (iStack.length > 0) {
    const c = iStack.shift();
    if (!c) return true;
    console.log({c})
    if (openers.includes(c)) {
      oStack.push(c);
      console.log("added opener", c)
      continue;
    }
    if (oStack.length === 0) return false;
    console.log(c);
  }
  return true;
}

export { balanced };
