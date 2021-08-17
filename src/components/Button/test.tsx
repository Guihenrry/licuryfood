import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

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

  it('should trigger the onClick method', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Finalizar pedido</Button>)

    userEvent.click(screen.getByRole('button', { name: /finalizar pedido/i }))
    expect(onClick).toHaveBeenCalled()
  })

  it('should be accessible with tab', () => {
    render(<Button>Finalizar pedido</Button>)

    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(
      screen.getByRole('button', { name: /finalizar pedido/i })
    ).toHaveFocus()
  })

  it('should trigger the onClick method by pressing the enter key', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Finalizar pedido</Button>)

    const button = screen.getByRole('button', { name: /finalizar pedido/i })

    userEvent.tab()
    expect(button).toHaveFocus()

    userEvent.keyboard('{enter}')
    expect(onClick).toHaveBeenCalled()
  })

  it('should trigger the onClick method by pressing the space key', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Finalizar pedido</Button>)

    const button = screen.getByRole('button', { name: /finalizar pedido/i })

    userEvent.tab()
    expect(button).toHaveFocus()

    userEvent.keyboard('{space}')
    expect(onClick).toHaveBeenCalled()
  })
})
