import { useState } from 'react'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Choice, ChoiceProps } from '.'

const props: ChoiceProps = {
  optionLeft: 'Entrega',
  optionRight: 'Retirada',
  optionChosen: 'Entrega',
  onChange: jest.fn()
}

describe('<Choice />', () => {
  it('should render the options correctly', () => {
    render(<Choice {...props} />)

    expect(screen.getByRole('button', { name: /Entrega/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Retirada/i })
    ).toBeInTheDocument()
  })

  it('should render with chosen option highlighted', () => {
    render(<Choice {...props} />)

    const optionChosen = screen.getByRole('button', { name: /Entrega/i })
    expect(optionChosen).toHaveStyleRule('color', 'var(--color-white)')

    const optionNotChosen = screen.getByRole('button', { name: /Retirada/i })
    expect(optionNotChosen).toHaveStyleRule('color', 'var(--color-gray)')
  })

  it('should call the method "onChange" with the option clicked', () => {
    const onChange = jest.fn()
    render(<Choice {...props} onChange={onChange} />)

    userEvent.click(screen.getByRole('button', { name: /Retirada/i }))

    expect(onChange).toHaveBeenCalledWith('Retirada')

    userEvent.click(screen.getByRole('button', { name: /Entrega/i }))

    expect(onChange).toHaveBeenCalledWith('Entrega')
  })

  it('should change option chosen on click', () => {
    const Wrapper = () => {
      const [optionChosen, setOptionChosen] = useState('Entrega')

      const handleChangeOption = (option: string) => {
        setOptionChosen(option)
      }

      return (
        <Choice
          optionLeft="Entrega"
          optionRight="Retirada"
          optionChosen={optionChosen}
          onChange={handleChangeOption}
        />
      )
    }

    render(<Wrapper />)

    const optionLeft = screen.getByRole('button', { name: /Entrega/i })
    const optionRight = screen.getByRole('button', { name: /Retirada/i })
    const highlight = optionLeft.previousElementSibling

    expect(optionLeft).toHaveStyleRule('color', 'var(--color-white)')
    expect(optionRight).toHaveStyleRule('color', 'var(--color-gray)')
    expect(highlight).toHaveStyleRule('transform', 'translateX(0)')

    userEvent.click(optionRight)

    expect(optionLeft).toHaveStyleRule('color', 'var(--color-gray)')
    expect(optionRight).toHaveStyleRule('color', 'var(--color-white)')
    expect(highlight).toHaveStyleRule(
      'transform',
      'translateX(calc(100% + var(--space-8)))'
    )
  })
})
