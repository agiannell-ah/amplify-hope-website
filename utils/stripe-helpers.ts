export const formatAmountForDisplay = (
  amount: number,
  currency: string
): string => {
  let numberFormat = new Intl.NumberFormat(['en-US'], {
    style: 'currency',
    currency,
    currencyDisplay: 'symbol'
  })
  return numberFormat.format(amount)
}

export const formatAmountForDisplayFromStripe = (
  amount: number,
  currency: string
): string => {
  let numberFormat = new Intl.NumberFormat(['en-US'], {
    style: 'currency',
    currency,
    currencyDisplay: 'symbol'
  })
  return numberFormat.format(amount / 100)
}

export const formatAmountForStripe = (
  amount: number,
  currency: string
): number => {
  let numberFormat = new Intl.NumberFormat(['en-US'], {
    style: 'currency',
    currency,
    currencyDisplay: 'symbol'
  })
  const parts = numberFormat.formatToParts(amount)
  let zeroDecimalCurrency: boolean = true
  for (let part of parts) {
    if (part.type === 'decimal') {
      zeroDecimalCurrency = false
    }
  }
  return zeroDecimalCurrency ? amount : Math.round(amount * 100)
}
