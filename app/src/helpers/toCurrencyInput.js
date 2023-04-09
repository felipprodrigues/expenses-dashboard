export default function toCurrencyInput(int, symbol = null) {
  if (!int) {
    return
  }

  // transforming the int parameter into string
  let currency = int.toString()

  // removing everything that's not a number
  currency = currency.replace(/\D/g, '')

  // checking if the parameter has a number after the regex use
  if (currency.length <= 0) {
    return
  }

  // applying cents mask
  currency = currency.replace(/([0-9]{2})$/g, ',$1')

  // applying complete mask if the number is higher than 6 chars
  if (currency.length > 6)
    currency = currency.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2')

  // applying complete mask if the number is higher than 9 chars
  if (currency.length > 9)
    currency = currency.replace(
      /([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g,
      '.$1.$2,$3'
    )

  // applying complete mask if the number is higher than 12 chars
  if (currency.length > 12)
    currency = currency.replace(
      /([0-9]{3}).([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g,
      '.$1.$2.$3,$4'
    )

  // verifying if the symbol was requested
  symbol !== null
    ? (currency = `R$ ${currency[0].replace(/\D/g, '')}${currency.slice(1)}`)
    : (currency = `${currency[0].replace(/\D/g, '')}${currency.slice(1)}`)

  // returning the result
  return currency
}
