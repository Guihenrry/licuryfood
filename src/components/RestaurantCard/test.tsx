import { render, screen } from '@testing-library/react'

import { RestaurantCard, RestaurantCardProps } from '.'

const props: RestaurantCardProps = {
  image: '/pizzaria.png',
  name: 'Pizzaria Delicious',
  category: 'Pizzaria',
  deliveryPrice: 'R$ 2,00',
  isOpen: true,
  href: '/menu/pizzaria-delicious'
}

describe('<RestaurantCard />', () => {
  it('should render restaurant information', () => {
    render(<RestaurantCard {...props} />)

    expect(
      screen.getByRole('img', { name: /Pizzaria Delicious/i })
    ).toHaveAttribute('src', '/pizzaria.png')

    expect(
      screen.getByRole('heading', { name: /Pizzaria Delicious/i })
    ).toBeInTheDocument()

    expect(screen.getByText('Pizzaria • Entrega R$ 2,00')).toBeInTheDocument()
  })
})
