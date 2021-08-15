import { Meta, Story } from '@storybook/react'

import { ProductCard, ProductCardProps } from '.'

export default {
  title: 'ProductCard',
  component: ProductCard,
  argTypes: {
    onPlus: {
      action: 'onPlus'
    },
    onLess: {
      action: 'onLess'
    }
  },
  args: {
    image: '/storybook/pizza.png',
    name: 'Frango com catupiry',
    description:
      'Queijo Mussarela - Frango - Catupiry - milho - Azeitona - Orégano',
    price: 35,
    quantity: 0
  }
} as Meta

export const Default: Story<ProductCardProps> = (args) => (
  <ProductCard {...args} />
)
Default.args = {
  quantity: 1
}

export const WithoutImage: Story<ProductCardProps> = (args) => (
  <ProductCard {...args} />
)
WithoutImage.args = { image: undefined }

export const WithoutDescription: Story<ProductCardProps> = (args) => (
  <ProductCard {...args} />
)
WithoutDescription.args = { description: undefined }
