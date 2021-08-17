import { screen, render } from '@testing-library/react'

import { Logo } from '.'

describe('<Logo />', () => {
  it('should render logo', () => {
    render(<Logo />)

    expect(screen.getByLabelText(/Licuryfood/i)).toBeInTheDocument()
  })
})
