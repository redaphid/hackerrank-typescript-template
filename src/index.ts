import _ from "lodash";
const closersToOpeners = {
  "}": "{",
  "]": "[",
  ")": "(",
};
const openers = _.values(closersToOpeners);
const closers = _.keys(closersToOpeners);
function balanced(s: string): boolean {
  if (s.length % 2 !== 0) return false;

  const iStack = s.split("");
  const oStack: string[] = [];

  while (iStack.length > 0) {
    const c = iStack.shift() || "";
    if (!openers.includes(c) && !closers.includes(c)) return false;

    if (openers.includes(c)) {
      if (oStack.length === 0) {
        oStack.push(c);
        continue;
      }
      const last = oStack.pop();
      if (closersToOpeners[c] !== last) return false;
      // oStack.pop();
    }
    if (closers.includes(c)) {
      const last = oStack.pop();
      if (last !== closersToOpeners[c]) {
        return false;
      }
    }
  }
  return true;
}
export { balanced };
