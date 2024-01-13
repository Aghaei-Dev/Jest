const mul = require('../src/mul')

//# unit test for mul func

test('mul two number --> 5*2 = 10', () => {
  expect(mul(5, 2)).toBe(10)
})


