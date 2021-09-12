import { Meta } from '@storybook/react'
import { useState } from 'react'

import { Choice } from '.'

export default {
  title: 'Form/Choice',
  component: Choice
} as Meta

export const Default = () => {
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
