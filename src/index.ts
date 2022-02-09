import _ from "lodash";
const closersToOpeners = {
  "}": "{",
  "]": "[",
  ")":"(",
};
const openers = _.values(closersToOpeners);
const closers = _.keys(closersToOpeners);
function balanced(s: string): boolean {
  if (s.length % 2 !== 0) return false;
  
  const iStack = s.split("");
  const oStack: string[] = [];  

  while (iStack.length > 0) {
    const c = iStack.shift();
    if (!c) return true;
    console.log({c})
    
    if (openers.includes(c)) {
      oStack.push(c)
      continue;
    }

    if (oStack.length === 0) return false;

    const close = closersToOpeners[c]
    if(!close) return false

    console.log(c);
  }
  return false;
}

export { balanced };
