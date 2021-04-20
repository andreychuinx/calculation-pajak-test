const validation = require('../utils/validation')
const { tax: {
  taxRelief, taxScheme
} } = require('../configs');
class TaxCalculation {
  /**
   * initial state
   * @param {Number} salary base salary
   */
  constructor() {
    this.salary = 0
  }

  /**
   * method to input salary
   * @param {Number} salary salary input
   * @return status
   */

  inputSalary(salary) {
    if (!validation.salary(salary).status) {
      return validation.salary(salary)
    } else {
      this.salary = Number(salary);
      return {
        status: validation.salary(salary).status,
        message: salary
      }
    }
  }

  /**
   * method to calculate tax
   * @param {String} relief type of tax relief
   */
  calculation(relief) {
    if (!validation.relief(relief).status) {
      return validation.relief(relief)
    }
    const totalSalaryYear = this.salary * 12
    let countRelief = totalSalaryYear - taxRelief[relief];
    let totalTax = 0
    while (countRelief > 0) {
      const findTaxScheme = taxScheme.findIndex(dt => dt.income < countRelief)
      const deductionSalary = countRelief - taxScheme[findTaxScheme].income
      totalTax += taxScheme[findTaxScheme].rate * deductionSalary
      if (taxScheme[findTaxScheme].income === 0) {
        countRelief = 0
      } else {
        countRelief -= deductionSalary
      }
    }
    return {
      status: true,
      message: totalTax
    }
  }

}

module.exports = TaxCalculation;