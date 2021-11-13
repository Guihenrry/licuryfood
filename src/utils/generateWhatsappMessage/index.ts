type MessageInfo = {
  deliveryInformation: {
    name: string
    withdrawal: boolean
    address: string
    number: string
    city: string
    complement: string
    note: string
  }
  paymentInformation: {
    payment_method: string
    money_change: string
  }
  orderInformation: {
    total: string
    orderItems: string[]
  }
}

export const generateWhatsappMessage = ({
  deliveryInformation,
  paymentInformation,
  orderInformation
}: MessageInfo) => {
  const orderText = orderInformation.orderItems
    .map((item, index) =>
      index === orderInformation.orderItems.length - 1
        ? item.trim()
        : `${item}\n`
    )
    .join('')

  const name = `Nome: ${deliveryInformation.name}\n`
  const withdrawal = `Retirar pedido: ${
    deliveryInformation.withdrawal ? 'Sim' : 'Não'
  }\n`
  const address = `Endereço: ${deliveryInformation.address}\n`
  const number = `Número: ${deliveryInformation.number}\n`
  const city = `Cidade: ${deliveryInformation.city}\n`
  const complement = `Complemento: ${deliveryInformation.complement}\n`
  const note = deliveryInformation.note
    ? `Observação: ${deliveryInformation.note}`
    : ''
  const addressText = deliveryInformation.withdrawal
    ? `${name}${withdrawal}${note}`
    : `${name}${withdrawal}${address}${number}${city}${complement}${note}`

  const paymentMethod = `Forma de pagamento: ${paymentInformation.payment_method}`
  const moneyChange =
    paymentInformation.payment_method === 'Dinheiro'
      ? `\nTroco para: ${paymentInformation.money_change}`
      : ``
  const paymentText = `${paymentMethod}${moneyChange}`

  return `Licuryfood

- - - - - - - -

*Informações da entrega*

${addressText}

*Informações do pagamento*

${paymentText}

*Informações do pedido*

${orderText}


*Total - ${orderInformation.total}*`
}
