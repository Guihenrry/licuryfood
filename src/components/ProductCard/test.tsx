import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ProductCard, ProductCardProps } from '.'

const props: ProductCardProps = {
  image: 'image.png',
  name: 'Frango com catupiry',
  description: 'Queijo Mussarela - Frango - Catupiry',
  price: 35,
  quantity: 0,
  onPlus: jest.fn(),
  onLess: jest.fn()
}

describe('<ProductCard />', () => {
  it('should render product information', () => {
    render(<ProductCard {...props} />)

    expect(
      screen.getByRole('img', { name: 'Frango com catupiry' })
    ).toHaveAttribute('src', 'image.png')

    expect(
      screen.getByRole('heading', { name: 'Frango com catupiry' })
    ).toBeInTheDocument()

    expect(
      screen.getByText('Queijo Mussarela - Frango - Catupiry')
    ).toBeInTheDocument()

    expect(screen.getByText(/R\$/i)).toBeInTheDocument()
    expect(screen.getByText(/35,00/i)).toBeInTheDocument()
  })

  it('should show the plus button and hide the less button when the quantity is zero', () => {
    render(<ProductCard {...props} quantity={0} />)

    expect(
      screen.getByRole('button', { name: 'Adicionar item ao pedido' })
    ).toBeInTheDocument()

    expect(
      screen.queryByRole('button', { name: 'Remover item ao pedido' })
    ).not.toBeInTheDocument()
  })

  it('should show the less button and quantity when the quantity is greater than 1', () => {
    render(<ProductCard {...props} quantity={4} />)

    expect(
      screen.getByRole('button', { name: 'Adicionar item ao pedido' })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: 'Remover item ao pedido' })
    ).toBeInTheDocument()

    expect(screen.getByText(/4/i)).toBeInTheDocument()
  })

  it('should call functions by clicking the plus and less buttons', () => {
    const onPlus = jest.fn()
    const onLess = jest.fn()

    render(
      <ProductCard {...props} quantity={4} onPlus={onPlus} onLess={onLess} />
    )

    const buttonPlus = screen.getByRole('button', {
      name: 'Adicionar item ao pedido'
    })

    const buttonLess = screen.getByRole('button', {
      name: 'Remover item ao pedido'
    })

    userEvent.click(buttonPlus)
    userEvent.click(buttonLess)

    expect(onPlus).toHaveBeenCalled()
    expect(onLess).toHaveBeenCalled()
  })
})
