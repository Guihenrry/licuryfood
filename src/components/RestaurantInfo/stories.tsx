import { Meta, Story } from '@storybook/react'

import { RestaurantInfo, RestaurantInfoProps } from '.'

export default {
  title: 'RestaurantInfo',
  component: RestaurantInfo,
  args: {
    backgroundImage: '/images/pizzaria-background.jpg',
    image: '/storybook/pizzaria-avatar.png',
    name: 'Pizzaria Delicious',
    category: 'Pizzaria',
    deliveryPrice: 2
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<RestaurantInfoProps> = (args) => (
  <RestaurantInfo {...args} />
)
