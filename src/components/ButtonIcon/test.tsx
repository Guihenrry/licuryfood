import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Plus } from 'components/Icons'
import { ButtonIcon } from '.'

describe('<ButtonIcon />', () => {
  it('should render button with icon', () => {
    render(
      <ButtonIcon aria-label="Add product">
        <Plus data-testid="icon" />
      </ButtonIcon>
    )

    expect(
      screen.getByRole('button', { name: /add product/i })
    ).toBeInTheDocument()

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render button with green color by default', () => {
    render(
      <ButtonIcon aria-label="Add product">
        <Plus data-testid="icon" />
      </ButtonIcon>
    )

    const button = screen.getByRole('button', { name: /Add product/i })

    expect(button).toHaveStyleRule('background', 'var(--color-green)')
    expect(button).toHaveStyleRule('color', 'var(--color-white)')
  })

  it('should render button with red color', () => {
    render(
      <ButtonIcon aria-label="Add product" color="red">
        <Plus data-testid="icon" />
      </ButtonIcon>
    )

    const button = screen.getByRole('button', { name: /Add product/i })

    expect(button).toHaveStyleRule('background', 'var(--color-red-light)')
    expect(button).toHaveStyleRule('color', 'var(--color-red-dark)')
  })

  it('should trigger the onClick method', () => {
    const onClick = jest.fn()

    render(
      <ButtonIcon aria-label="Add product" color="red" onClick={onClick}>
        <Plus data-testid="icon" />
      </ButtonIcon>
    )

    userEvent.click(screen.getByRole('button', { name: /Add product/i }))
    expect(onClick).toHaveBeenCalled()
  })
})
