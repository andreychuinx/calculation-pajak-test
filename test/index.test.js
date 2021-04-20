const chai = require('chai')
const expect = chai.expect;
const { taxCalculation } = require('../src/services')

describe(`
test case with negative case
- input salary
- pick relief
- count tax
`, () => {
  const tax = new taxCalculation()
  const falseSalary = 'testnot number';
  const trueSalary = 25000000
  it('it should be error if input salary is not a number', () => {
    const resp = tax.inputSalary(falseSalary)
    expect(resp.message).to.have.string('Salary is not a Number')
    expect(resp.status).to.equal(false)
  })
  it('it should be success if input salary is number', () => {
    const resp = tax.inputSalary(trueSalary)
    expect(resp.message).to.equal(trueSalary)
    expect(resp.status).to.equal(true)
  })
  it('it should be error if input relief is not in tax relief list', () => {
    const resp = tax.calculation('K5')
    expect(resp.message).to.have.string('Cannot found type of Relief')
    expect(resp.status).to.equal(false)
  })
  it('tax should be 31900000 if input salary = 25000000 and tax relief TK0', () => {
    const resp = tax.calculation('TK0')
    expect(true)
    expect(resp.status).to.equal(true)
    expect(resp.message).to.equal(31900000)
  })
  it('tax should be 750000 if input salary = 6500000 and tax relief K1', () => {
    tax.inputSalary(6500000)
    const resp = tax.calculation('K1')
    expect(true)
    expect(resp.status).to.equal(true)
    expect(resp.message).to.equal(750000)
  })
  it('tax should be 0 if input salary = 3000000 and tax relief K0', () => {
    tax.inputSalary(3000000)
    const resp = tax.calculation('K0')
    expect(true)
    expect(resp.status).to.equal(true)
    expect(resp.message).to.equal(0)
  })
})