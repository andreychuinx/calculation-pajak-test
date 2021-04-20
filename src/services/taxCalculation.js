const validation = require('../utils/validation')
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
   */

  inputSalary(salary) {
    if (!validation.salary(salary).status) {
      return validation.salary(salary).message
    } else {
      this.salary = Number(salary);
      return validation.salary(salary).status
    }
  }

}

module.exports = TaxCalculation;