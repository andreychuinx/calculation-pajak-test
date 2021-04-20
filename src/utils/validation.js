const { tax: { taxRelief } } = require('../configs')

module.exports = {
  salary: (input) => {
    if (Number.isNaN(Number(input))) {
      return {
        status: false,
        message: 'Salary is not a Number'
      }
    }
    return {
      status: true,
    }
  },
  relief: (input) => {
    if (taxRelief[input] === undefined) {
      return {
        status: false,
        message: 'Cannot found type of Relief'
      }
    }
    return {
      status: true
    }
  }
}