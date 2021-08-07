import { Meta, Story } from '@storybook/react'

import { RestaurantCard, RestaurantCardProps } from '.'

export default {
  title: 'RestaurantCard',
  component: RestaurantCard,
  args: {
    image: '/pizzaria.png',
    name: 'Pizzaria Delicious',
    category: 'Pizzaria',
    deliveryPrice: 'R$ 2,00',
    isOpen: true,
    href: '#'
  }
} as Meta

export const Default: Story<RestaurantCardProps> = (args) => (
  <RestaurantCard {...args} />
)
