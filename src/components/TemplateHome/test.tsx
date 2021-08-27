import { render, screen } from '@testing-library/react'

import { TemplateHome, TemplateHomeProps } from '.'

const props: TemplateHomeProps = {
  restaurants: [
    {
      slug: 'restaurant-1',
      name: 'Restaurant 1',
      image: '/restaurant-1.jpg',
      category: 'category-1',
      deliveryPrice: 1
    },
    {
      slug: 'restaurant-2',
      name: 'Restaurant 2',
      image: '/restaurant-2.jpg',
      category: 'category-2',
      deliveryPrice: 2
    }
  ]
}

describe('<TemplateHome />', () => {
  it('should render logo and restaurant cards', () => {
    render(<TemplateHome {...props} />)

    // Logo
    expect(screen.getByLabelText(/Licuryfood/i)).toBeInTheDocument()

    // RestaurantCard 1
    expect(screen.getAllByRole('link')[0]).toHaveAttribute(
      'href',
      '/cardapio/restaurant-1'
    )
    expect(screen.getByRole('img', { name: /Restaurant 1/i })).toHaveAttribute(
      'src',
      '/restaurant-1.jpg'
    )
    expect(
      screen.getByRole('heading', { name: /Restaurant 1/i })
    ).toBeInTheDocument()
    expect(screen.getByText('category-1 • Entrega R$ 1,00')).toBeInTheDocument()

    // RestaurantCard 2
    expect(screen.getAllByRole('link')[1]).toHaveAttribute(
      'href',
      '/cardapio/restaurant-2'
    )
    expect(screen.getByRole('img', { name: /Restaurant 2/i })).toHaveAttribute(
      'src',
      '/restaurant-2.jpg'
    )
    expect(
      screen.getByRole('heading', { name: /Restaurant 2/i })
    ).toBeInTheDocument()
    expect(screen.getByText('category-2 • Entrega R$ 2,00')).toBeInTheDocument()
  })
})
