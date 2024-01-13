const greeting = require('../src/greeting')

test('greeting must have fname,lname ', () => {
  const fName = 'hasan'
  const lName = 'aghaei'

  expect(greeting(fName, lName)).toBe(`hi ${fName} ${lName}, you are welcome`)
})
