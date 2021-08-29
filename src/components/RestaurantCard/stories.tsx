import { Meta, Story } from '@storybook/react'

import { RestaurantCard, RestaurantCardProps } from '.'

export default {
  title: 'RestaurantCard',
  component: RestaurantCard,
  args: {
    image: '/storybook/pizzaria-avatar.png',
    name: 'Pizzaria Delicious',
    category: 'Pizzaria',
    deliveryPrice: 2,
    href: '#'
  }
} as Meta

export const Default: Story<RestaurantCardProps> = (args) => (
  <RestaurantCard {...args} />
)
