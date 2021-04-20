const taxScheme = [
  {
    income: 500000000,
    rate: 0.3,
  }, {
    income: 250000000,
    rate: 0.25,
  }, {
    income: 50000000,
    rate: 0.15
  }, {
    income: 0,
    rate: 0.05
  }
]

const taxRelief = {
  'TK0': 54000000,
  'K0': 58500000,
  'K1': 63000000,
  'K2': 67500000,
  'K3': 72000000,
}

module.exports = {
  taxScheme,
  taxRelief,
}