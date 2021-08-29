import { screen, render } from '@testing-library/react'

import { RestaurantInfo } from '.'

const props = {
  backgroundImage: '/background.jpg',
  image: '/pizzaria.png',
  name: 'Pizzaria Delicious',
  category: 'Pizzaria',
  deliveryPrice: 2
}

describe('<RestaurantInfo />', () => {
  it('should render restaurant information correctly', () => {
    render(<RestaurantInfo {...props} />)

    // Link to home
    expect(
      screen.getByRole('link', { name: /Voltar para o inicio/i })
    ).toHaveAttribute('href', '/')

    // Background image
    expect(screen.getByRole('img', { name: 'Pizzaria' })).toHaveAttribute(
      'src',
      '/background.jpg'
    )

    // Restaurant information
    expect(
      screen.getByRole('img', { name: /Pizzaria Delicious/i })
    ).toHaveAttribute('src', '/pizzaria.png')
    expect(
      screen.getByRole('heading', { name: /Pizzaria Delicious/i })
    ).toBeInTheDocument()
    expect(screen.getByText('Pizzaria • Entrega R$ 2,00')).toBeInTheDocument()
  })
})
