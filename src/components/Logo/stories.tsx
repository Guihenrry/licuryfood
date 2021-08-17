import { Meta } from '@storybook/react'

import { Logo } from '.'

export default {
  title: 'Logo',
  component: Logo
} as Meta

export const Default = () => <Logo width={103} height={24} />
