const readlineSync = require('readline-sync')
const { tax: { taxRelief } } = require('./src/configs')
const { taxCalculation } = require('./src/services')
const { currency } = require('./src/utils/helper')

console.log('Welcome to Calculation Tax App')

const app = () => {
  const tax = new taxCalculation();
  const salaryInput = readlineSync.question('How much your Salary ? ')
  const taxSalary = tax.inputSalary(salaryInput)
  if (taxSalary.status !== true) {
    console.log(taxSalary.message)
    if (readlineSync.keyInYN('Do you want to Calculate again ? ')) {
      app()
    }
  } else {
    const taxReliefArr = Object.keys(taxRelief)
    const reliefInput = readlineSync.keyInSelect(taxReliefArr, 'Pick Tax Relief')
    const taxResult = tax.calculation(taxReliefArr[reliefInput])
    console.log(`
    Your Salary: Rp. ${currency(salaryInput)}
    Your Tax Relief: ${taxReliefArr[reliefInput]} - Rp. ${currency(taxRelief[taxReliefArr[reliefInput]])}
    Your Tax: Rp. ${currency(taxResult.message)}
  `)
  }
}

app()