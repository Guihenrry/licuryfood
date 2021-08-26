import { Meta, Story } from '@storybook/react'

import { RestaurantCard, RestaurantCardProps } from '.'

export default {
  title: 'RestaurantCard',
  component: RestaurantCard,
  args: {
    image: '/storybook/pizzaria.png',
    name: 'Pizzaria Delicious',
    category: 'Pizzaria',
    deliveryPrice: 'R$ 2,00',
    href: '#'
  }
} as Meta

export const Default: Story<RestaurantCardProps> = (args) => (
  <RestaurantCard {...args} />
)
