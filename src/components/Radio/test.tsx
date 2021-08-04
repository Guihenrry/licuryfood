import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Radio } from '.'

describe('<Radio />', () => {
  it('should render radio', () => {
    render(<Radio />)

    expect(screen.getByRole('radio')).toBeInTheDocument()
  })

  it('should render disabled and checked', () => {
    render(<Radio checked disabled />)

    const radio = screen.getByRole('radio')
    expect(radio).toBeChecked()
    expect(radio).toBeDisabled()
  })

  it('should be accessible with tab', () => {
    render(<Radio />)

    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(screen.getByRole('radio')).toHaveFocus()
  })
})
