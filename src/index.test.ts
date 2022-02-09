import {pairs} from './index';
  test("Example 1", ()=>{
    const input = [1,2,3,4]
    const diff =1
    expect(pairs(input, diff)).toEqual(3)
  })

