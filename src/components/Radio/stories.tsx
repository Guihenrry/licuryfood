import { Meta } from '@storybook/react'
import { Radio } from '.'

export default {
  title: 'Form/Radio',
  component: Radio
} as Meta

export const Default = () => {
  return (
    <>
      <Radio value="1" name="default" />
      <Radio value="2" name="default" />
      <Radio value="3" name="default" />
    </>
  )
}

export const Disabled = () => {
  return (
    <>
      <Radio value="1" name="disabled" checked disabled />
      <Radio value="2" name="disabled" disabled />
    </>
  )
}
