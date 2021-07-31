import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Textarea } from '.'

describe('<Textarea />', () => {
  it('should render with label', () => {
    render(<Textarea id="message" label="Message" />)

    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('should focus on tab pressed', () => {
    render(<Textarea label="Message" id="message" />)

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(screen.getByLabelText('Message')).toHaveFocus()
  })

  it('should render with helperText', () => {
    render(
      <Textarea label="Message" id="message" helperText="Some important text" />
    )

    expect(screen.getByText(/Some important text/i)).toBeInTheDocument()
  })

  it('should render with error style', () => {
    render(
      <Textarea
        error
        label="Message"
        id="message"
        helperText="Some important text"
      />
    )

    expect(screen.getByLabelText('Message')).toHaveStyleRule(
      'border-color',
      'var(--color-red-dark)'
    )

    expect(screen.getByText(/Some important text/i)).toHaveStyleRule(
      'color',
      'var(--color-red-dark)'
    )
  })
})
