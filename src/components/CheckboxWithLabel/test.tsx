import { screen, render } from '@testing-library/react'

import { CheckboxWithLabel, CheckboxWithLabelProps } from '.'

const props: CheckboxWithLabelProps = {
  optionLeft: 'Entrega',
  optionRight: 'Retirada'
}

describe('<CheckboxWithLabel />', () => {
  it('should render a checkbox with label', () => {
    render(<CheckboxWithLabel {...props} />)

    expect(
      screen.getByRole('checkbox', { name: /Entrega Retirada/i })
    ).toBeInTheDocument()
  })
})
