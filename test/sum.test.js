const sum = require('../src/sum')

//# unit test for sum func

test('sum two number --> 2+2 =4', () => {
  expect(sum(2, 2)).toBe(4)
})

// other assertions

test('zero', () => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})

test('two plus two', () => {
  const value = 2 + 2
  expect(value).toBeGreaterThan(3)
  expect(value).toBeGreaterThanOrEqual(3.5)
  expect(value).toBeLessThan(5)
  expect(value).toBeLessThanOrEqual(4.5)

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4)
  expect(value).toEqual(4)
})

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2
  //expect(value).toBe(0.3);           This won't work because of rounding error
  expect(value).toBeCloseTo(0.3) // This works.
})

test('object assignment', () => {
  const data = { one: 1 }
  data['two'] = 2
  data['three'] = 3
  expect(data).toEqual({ one: 1, two: 2, three: 3 })
})
