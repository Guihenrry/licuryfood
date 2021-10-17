import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { TemplateMenu, TemplateMenuProps } from '.'
import { CartProvider } from 'hooks/useCart'

const props: TemplateMenuProps = {
  slug: 'pizzaria-do-zeca',
  name: 'Pizzaria do zeca',
  backgroundImage: '/background.jpg',
  image: '/image.jpg',
  category: 'Pizzaria',
  deliveryPrice: 5,
  menu: [
    {
      categoryTitle: 'Pizzas',
      items: [
        {
          id: '1',
          name: 'Calabresa',
          description: 'Queijo Mussarela - Calabreza - Cebola',
          price: 35
        },
        {
          id: '2',
          name: 'Bacon',
          description: 'Queijo Mussarela - Bacon',
          price: 40
        }
      ]
    },
    {
      categoryTitle: 'Esfihas',
      items: [
        {
          id: '3',
          name: 'Carne',
          image: '/esfiha-de-carne.jpg',
          price: 3
        },
        {
          id: '4',
          name: 'Frango',
          image: '/esfiha-de-frango.jpg',
          price: 2.5
        }
      ]
    }
  ]
}

describe('<TemplateMenu />', () => {
  it('should render restaurant information correctly', () => {
    render(
      <CartProvider>
        <TemplateMenu {...props} />
      </CartProvider>
    )

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
      screen.getByRole('img', { name: /Pizzaria do zeca/i })
    ).toHaveAttribute('src', '/image.jpg')
    expect(
      screen.getByRole('heading', { name: /Pizzaria do zeca/i })
    ).toBeInTheDocument()
    expect(screen.getByText('Pizzaria • Entrega R$ 5,00')).toBeInTheDocument()
  })

  it('should render menu items', () => {
    render(
      <CartProvider>
        <TemplateMenu {...props} />
      </CartProvider>
    )

    // Category 1 - Pizzas
    expect(screen.getByRole('heading', { name: 'Pizzas' })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: 'Calabresa' })
    ).toBeInTheDocument()
    expect(
      screen.getByText('Queijo Mussarela - Calabreza - Cebola')
    ).toBeInTheDocument()
    expect(screen.getByText(/35,00/i)).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Bacon' })).toBeInTheDocument()
    expect(screen.getByText('Queijo Mussarela - Bacon')).toBeInTheDocument()
    expect(screen.getByText(/40,00/i)).toBeInTheDocument()

    // Category 1 - Esfihas
    expect(screen.getByRole('heading', { name: 'Esfihas' })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Carne' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Carne' })).toHaveAttribute(
      'src',
      '/esfiha-de-carne.jpg'
    )
    expect(screen.getByText(/3,00/i)).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Frango' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Frango' })).toHaveAttribute(
      'src',
      '/esfiha-de-frango.jpg'
    )
    expect(screen.getByText(/2,50/i)).toBeInTheDocument()
  })

  it('it should be possible to add and remove products from the cart', async () => {
    render(
      <CartProvider>
        <TemplateMenu {...props} />
      </CartProvider>
    )

    const addButtons = screen.getAllByRole('button', {
      name: /Adicionar item ao pedido/i
    })

    userEvent.click(addButtons[0]) // Pizza Calabresa = R$ 35,00
    userEvent.click(addButtons[1]) // Pizza Bacon = R$ 40,00
    userEvent.click(addButtons[0]) // Pizza Calabresa = R$ 35,00

    const removeButtons = await screen.findAllByRole('button', {
      name: /Remover item ao pedido/i
    })

    expect(removeButtons.length).toBe(2)

    // Quantity items in cart
    expect(await screen.findByText('2')).toBeInTheDocument() // Pizza Calabresa
    expect(await screen.findByText('1')).toBeInTheDocument() // Pizza Bacon

    // Checkout button
    expect(
      await screen.findByRole('link', { name: /Finalizar pedido/i })
    ).toHaveAttribute('href', '/finalizar-pedido/pizzaria-do-zeca')
    expect(await screen.findByText('R$ 115,00')).toBeInTheDocument()
    expect(await screen.findByText('3')).toBeInTheDocument()

    userEvent.click(removeButtons[0])
    userEvent.click(removeButtons[1])

    // Quantity intens + Checkout button Quantity
    expect((await screen.findAllByText('1')).length).toBe(2)

    // Checkout button
    expect(
      await screen.findByRole('link', { name: /Finalizar pedido/i })
    ).toHaveAttribute('href', '/finalizar-pedido/pizzaria-do-zeca')
    expect(await screen.findByText('R$ 40,00')).toBeInTheDocument()
  })
})
