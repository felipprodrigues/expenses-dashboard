export default function currencyMask(value, options = {}) {
  if (!value) return options.removeSymbol ? '0,00' : 'R$ 0,00'

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  })

  const currency = formatter.format(parseFloat(value))

  return options.removeSymbol ? currency.replace('R$ ', '') : currency
}
