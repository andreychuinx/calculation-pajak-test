const chai = require('chai')
const expect = chai.expect;
const { taxCalculation } = require('../src/services')

describe(`
test case with negative case
- input salary
- pick relief
`, () => {
  const tax = new taxCalculation()
  it('it should be error if input salary is not a number', () => {
    const resp = tax.inputSalary('this is not a number')
    expect(resp).to.have.string('Salary is not a Number')
  })
  it('it should be success if input salary is number', () => {
    const resp = tax.inputSalary(10000000)
    expect(resp).to.have.equal(true)
  })
})