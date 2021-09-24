import { screen, render } from '@testing-library/react'

import { Receipt } from '.'

describe('<Receipt />', () => {
  it('shoudl render content correctly', () => {
    render(
      <Receipt
        total="R$ 75,00"
        contents={[
          {
            itens: [
              { name: '1x Pizza - 2 queijos', value: 'R$ 35,00' },
              { name: '1x Pizza - Frango com catupiry 2', value: 'R$ 40,00' }
            ]
          }
        ]}
      />
    )

    expect(screen.getByText(/1x Pizza - 2 queijos/i)).toBeInTheDocument()
    expect(screen.getByText(/R\$ 35,00/i)).toBeInTheDocument()

    expect(
      screen.getByText(/1x Pizza - Frango com catupiry 2/i)
    ).toBeInTheDocument()
    expect(screen.getByText(/R\$ 40,00/i)).toBeInTheDocument()

    expect(screen.getByText(/total/i)).toBeInTheDocument()
    expect(screen.getByText(/R\$ 75,00/i)).toBeInTheDocument()
  })

  it('should render with content title', () => {
    render(
      <Receipt
        total="R$ 75,00"
        contents={[
          {
            title: 'Informações da entrega',
            itens: [
              { name: 'Nome', value: 'Zé da Silva' },
              { name: 'Endereço', value: 'Praça Isabel Sampaio' }
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
              { name: '1x Pizza - Frango com catupiry 2', value: 'R$ 40,00' }
            ]
          }
        ]}
      />
    )

    expect(
      screen.getByRole('heading', { name: /Informações da entrega/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/Nome/i)).toBeInTheDocument()
    expect(screen.getByText(/Zé da Silva/i)).toBeInTheDocument()
    expect(screen.getByText(/Endereço/i)).toBeInTheDocument()
    expect(screen.getByText(/Praça Isabel Sampaio/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Informações do pagamento/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/Forma de pagamento/i)).toBeInTheDocument()
    expect(screen.getByText(/Dinheiro/i)).toBeInTheDocument()
    expect(screen.getByText(/Troco para/i)).toBeInTheDocument()
    expect(screen.getByText(/R\$ 100,00/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Informações do pedido/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/1x Pizza - 2 queijos/i)).toBeInTheDocument()
    expect(screen.getByText(/R\$ 35,00/i)).toBeInTheDocument()
    expect(
      screen.getByText(/1x Pizza - Frango com catupiry 2/i)
    ).toBeInTheDocument()
    expect(screen.getByText(/R\$ 40,00/i)).toBeInTheDocument()
  })
})
