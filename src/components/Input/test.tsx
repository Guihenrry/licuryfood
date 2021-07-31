import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Input } from '.'

describe('<Input />', () => {
  it('should render with label', () => {
    render(<Input label="Name" id="name" />)

    expect(screen.getByLabelText('Name')).toBeInTheDocument()
  })

  it('should focus on tab pressed', () => {
    render(<Input label="Name" id="name" />)

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(screen.getByLabelText('Name')).toHaveFocus()
  })

  it('should render with helperText', () => {
    render(<Input label="Name" id="name" helperText="Some important text" />)

    expect(screen.getByText(/Some important text/i)).toBeInTheDocument()
  })

  it('should render with error style', () => {
    render(
      <Input error label="Name" id="name" helperText="Some important text" />
    )

    expect(screen.getByLabelText('Name')).toHaveStyleRule(
      'border-color',
      'var(--color-red-dark)'
    )

    expect(screen.getByText(/Some important text/i)).toHaveStyleRule(
      'color',
      'var(--color-red-dark)'
    )
  })
})
