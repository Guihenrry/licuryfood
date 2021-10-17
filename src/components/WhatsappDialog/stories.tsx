import { Meta, Story } from '@storybook/react'

import { WhatsappDialog, WhatsappDialogProps } from '.'

export default {
  title: 'WhatsappDialog',
  component: WhatsappDialog,
  args: {
    isOpen: true,
    link: 'https://www.whatsapp.com/'
  },
  argTypes: {
    onOutsideClick: {
      action: 'onOutsideClick'
    },
    onCancelClick: {
      action: 'onCancelClick'
    },
    onContinueClick: {
      action: 'onContinueClick'
    },
    onKeyDownEsc: {
      action: 'onKeyDownEsc'
    },
    link: {
      type: ''
    }
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta<WhatsappDialogProps>

export const Default: Story<WhatsappDialogProps> = (args) => (
  <WhatsappDialog {...args} />
)
