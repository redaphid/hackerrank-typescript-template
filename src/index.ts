function pairs(target:number, pairs:number[]):number {
  let count = 0;
  for (let i = 0; i < pairs.length; i++) {
    const n1 = pairs[i];
    for (let j = i + 1; j < pairs.length; j++) {
      const n2 = pairs[j];
      const diff = Math.abs(n1 - n2);
      if (diff === target) {
        // console.log({i, n1, n2, diff});
        count++;
      }
    }
  }
  return count;
  // return 3
}
export {pairs};
