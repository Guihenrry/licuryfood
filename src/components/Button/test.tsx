import { render, screen } from '@testing-library/react'

import { Button } from '.'

describe('<Button />', () => {
  it('should render the button with its content', () => {
    render(<Button>Finalizar pedido</Button>)

    expect(
      screen.getByRole('button', { name: /finalizar pedido/i })
    ).toBeInTheDocument()
  })

  it('should render button with contained variant by default', () => {
    render(<Button>Finalizar pedido</Button>)

    const button = screen.getByRole('button', { name: /finalizar pedido/i })

    expect(button).toHaveStyleRule('background', 'var(--color-green)')
    expect(button).toHaveStyleRule('color', 'var(--color-white)')
  })

  it('should render button with text variant', () => {
    render(<Button variant="text">Finalizar pedido</Button>)

    const button = screen.getByRole('button', { name: /finalizar pedido/i })

    expect(button).toHaveStyleRule('background', 'transparent')
    expect(button).toHaveStyleRule('color', 'var(--color-gray-dark)')
  })
})
