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

    //Check if the character is even valid
    if(!openers.includes(c) && !closers.includes(c)) return false
    
    if (openers.includes(c)) {
      oStack.push(c)
      continue;
    }

    if (oStack.length === 0) return false;

    const last = oStack.pop()

    const o = closersToOpeners[c]

    if(!last) return false
    console.log({last,o,c, eq: o == '{'})
    if(o !== last) return false
  }
  return true;
}

export { balanced };
