var currency = (number) => {
  return new Intl.NumberFormat(['ban', 'id']).format(number)
}

module.exports = {
  currency,
}