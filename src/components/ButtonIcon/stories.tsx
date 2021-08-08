import { Meta } from '@storybook/react'

import { Plus, Less } from 'components/Icons'
import { ButtonIcon } from '.'

export default {
  title: 'Form/ButtonIcon',
  component: ButtonIcon
} as Meta

export const Green = () => (
  <ButtonIcon color="green">
    <Plus />
  </ButtonIcon>
)
export const Red = () => (
  <ButtonIcon color="red">
    <Less />
  </ButtonIcon>
)
