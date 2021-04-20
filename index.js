const readlineSync = require('readline-sync')
const { tax: { taxRelief } } = require('./src/configs')

const app = () => {
  console.log('Welcome to Calculation Tax App')
  const salaryInput = readlineSync.question('How much your Salary ? ')
  console.log(salaryInput)
  const taxReliefArr = Object.keys(taxRelief)
  const reliefInput = readlineSync.keyInSelect(taxReliefArr, 'Pick Tax Relief')
  console.log(taxReliefArr[reliefInput])
}

app()