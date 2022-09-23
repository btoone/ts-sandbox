import { greeter } from "./index"

describe('greeter', () => {
  it('says hello', () => {
    let actual: string
    actual = greeter('World!')
    expect(actual).toBe('Hello, World!')
  })
})
