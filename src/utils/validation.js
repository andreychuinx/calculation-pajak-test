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
}