import {pairs} from './index';
  test("Example 1", ()=>{
    const nums = [1,2,3,4]
    const diff =1
    expect(pairs(diff, nums)).toEqual(3)
  })
  test("When we ask for a difference of 2, it should return 1", ()=>{
    const nums = [1,2,3,4]

    const diff = 2
    expect(pairs(diff, nums)).toEqual(2)
  })

