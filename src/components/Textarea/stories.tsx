import { Meta } from '@storybook/react'

import { Textarea } from '.'

export default {
  title: 'Form/Textarea',
  component: Textarea
} as Meta

export const Default = () => <Textarea id="id" label="Label" />
export const WithHelperText = () => (
  <Textarea id="id" label="Label" helperText="Some important text" />
)
export const WithError = () => (
  <Textarea error id="id" label="Label" helperText="Some important text" />
)
