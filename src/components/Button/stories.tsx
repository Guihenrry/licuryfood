import { Meta } from '@storybook/react'

import { Button } from '.'

export default {
  title: 'Form/Button',
  component: Button
} as Meta

export const Contained = () => <Button>Button</Button>
export const Text = () => <Button variant="text">Button</Button>
