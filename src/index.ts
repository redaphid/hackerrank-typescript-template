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

    const last = oStack.pop()
    if(!last) return false
    const o = closersToOpeners[c]

 
    console.log({last,o,c})
    if(o !== last) return false
  }
  console.log("tail case")
  console.log({oStack, iStack})
  return oStack.length === 0;
}

export { balanced };
