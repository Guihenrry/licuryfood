import { Meta } from '@storybook/react'

import { CheckboxWithLabel } from '.'

export default {
  title: 'Form/CheckboxWithLabel',
  component: CheckboxWithLabel
} as Meta

export const Default = () => (
  <CheckboxWithLabel optionLeft="Entrega" optionRight="Retirada" />
)
