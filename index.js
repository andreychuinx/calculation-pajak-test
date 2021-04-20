const readlineSync = require('readline-sync')
const { tax: { taxRelief } } = require('./src/configs')
const { taxCalculation } = require('./src/services')

const app = () => {
  const tax = new taxCalculation();
  console.log('Welcome to Calculation Tax App')
  const salaryInput = readlineSync.question('How much your Salary ? ')
  const taxSalary = tax.inputSalary(salaryInput)
  if (taxSalary !== true) {
    console.log(taxSalary)
  }
  console.log(tax.salary)
  const taxReliefArr = Object.keys(taxRelief)
  const reliefInput = readlineSync.keyInSelect(taxReliefArr, 'Pick Tax Relief')
  console.log(taxReliefArr[reliefInput])
}

app()