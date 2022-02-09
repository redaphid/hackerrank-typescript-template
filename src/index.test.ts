import { balanced } from './index';
describe("balanced", ()=>{
  test("Let's get things started", () => {
    expect(balanced).toBeDefined();
  })
  test("random characters should return false", ()=>{
    const result = balanced("Aa")
    expect(result).toBe(false)
  })
  test("{} should return true", () => {
    const result = balanced("{}")
    expect(result).toBe(true)
  })
  test("{ should return false", () => {
    const result = balanced('{')
    expect(result).toBe(false)
  })

  test("}} should return false", ()=>{
    const result = balanced("{[}]")
    expect(result).toBe(false)
  })
  
})
