import { generateWhatsappMessage } from '.'

describe('generateWhatsappMessage()', () => {
  it('shoudl return the message correctly', () => {
    const message = generateWhatsappMessage({
      deliveryInformation: {
        name: 'Zé da Silva',
        withdrawal: false,
        address: 'Rua ali perto',
        number: '007',
        city: 'Licuri',
        complement: 'Casa',
        note: 'Tirar a cebola'
      },
      paymentInformation: {
        payment_method: 'Dinheiro',
        money_change: 'R$ 100,00'
      },
      orderInformation: {
        total: 'R$ 86,00',
        orderItems: [
          '1x Pizza 2 queijos - R$ 35,00',
          '1x Pizza Frango com catupiry - R$ 40,00',
          '3x Esfihas Carne - R$ 9,00',
          'Taxa de entrega - R$ 2,00'
        ]
      }
    })

    expect(message).toStrictEqual(
      `Licuryfood

- - - - - - - -

*Informações da entrega*

Nome: Zé da Silva
Retirar pedido: Não
Endereço: Rua ali perto
Número: 007
Cidade: Licuri
Complemento: Casa
Observação: Tirar a cebola

*Informações do pagamento*

Forma de pagamento: Dinheiro
Troco para: R$ 100,00

*Informações do pedido*

1x Pizza 2 queijos - R$ 35,00
1x Pizza Frango com catupiry - R$ 40,00
3x Esfihas Carne - R$ 9,00
Taxa de entrega - R$ 2,00


*Total - R$ 86,00*`
    )
  })

  it('should return the message without the address and money change data', () => {
    const message = generateWhatsappMessage({
      deliveryInformation: {
        name: 'Zé da Silva',
        withdrawal: true,
        address: '',
        number: '',
        city: '',
        complement: '',
        note: 'Tirar a cebola'
      },
      paymentInformation: {
        payment_method: 'PIX',
        money_change: ''
      },
      orderInformation: {
        total: 'R$ 86,00',
        orderItems: [
          '1x Pizza 2 queijos - R$ 35,00',
          '1x Pizza Frango com catupiry - R$ 40,00',
          '3x Esfihas Carne - R$ 9,00',
          'Taxa de entrega - R$ 2,00'
        ]
      }
    })

    expect(message).toStrictEqual(
      `Licuryfood

- - - - - - - -

*Informações da entrega*

Nome: Zé da Silva
Retirar pedido: Sim
Observação: Tirar a cebola

*Informações do pagamento*

Forma de pagamento: PIX

*Informações do pedido*

1x Pizza 2 queijos - R$ 35,00
1x Pizza Frango com catupiry - R$ 40,00
3x Esfihas Carne - R$ 9,00
Taxa de entrega - R$ 2,00


*Total - R$ 86,00*`
    )
  })
})
