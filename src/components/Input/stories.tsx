import { Meta } from '@storybook/react'

import { Input } from '.'

export default {
  title: 'Input',
  component: Input
} as Meta

export const Default = () => <Input id="id" label="Label" />
export const WithHelperText = () => (
  <Input id="id" label="Label" helperText="Some important text" />
)
export const WithError = () => (
  <Input error id="id" label="Label" helperText="Some important text" />
)
