import { Meta } from '@storybook/react'

import { Receipt } from '.'

export default {
  title: 'Receupt',
  component: Receipt
} as Meta

export const Default = () => (
  <Receipt
    total="R$ 86,00"
    contents={[
      {
        itens: [
          { name: '1x Pizza - 2 queijos', value: 'R$ 35,00' },
          { name: '1x Pizza - Frango com catupiry 2', value: 'R$ 40,00' },
          { name: '3x Esfihas - Carne', value: 'R$ 9,00' },
          { name: 'Taxa de entrega', value: 'R$ 2,00' }
        ]
      }
    ]}
  />
)

export const WithTitle = () => (
  <Receipt
    total="R$ 86,00"
    contents={[
      {
        title: 'Informações da entrega',
        itens: [
          { name: 'Nome', value: 'Zé da Silva' },
          { name: 'Endereço', value: 'Praça Isabel Sampaio' },
          { name: 'Número', value: '410' },
          { name: 'Cidade', value: 'Souto Soares - BA' },
          { name: 'Complemento', value: 'Casa' }
        ]
      },
      {
        title: 'Informações do pagamento',
        itens: [
          { name: 'Forma de pagamento', value: 'Dinheiro' },
          { name: 'Troco para', value: 'R$ 100,00' }
        ]
      },
      {
        title: 'Informações do pedido',
        itens: [
          { name: '1x Pizza - 2 queijos', value: 'R$ 35,00' },
          { name: '1x Pizza - Frango com catupiry 2', value: 'R$ 40,00' },
          { name: '3x Esfihas - Carne', value: 'R$ 9,00' },
          { name: 'Taxa de entrega', value: 'R$ 2,00' }
        ]
      }
    ]}
  />
)
