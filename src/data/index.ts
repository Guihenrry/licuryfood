import { wykLanches } from './wyk-lanches'

const restaurant1 = {
  slug: 'restaurant-1',
  name: 'Restaurant 1',
  image: '/storybook/pizzaria.png',
  category: 'category-1',
  deliveryPrice: 1
}

const restaurant2 = {
  slug: 'restaurant-2',
  name: 'Restaurant 2',
  image: '/storybook/pizzaria.png',
  category: 'category-2',
  deliveryPrice: 2
}

export const data = {
  'wyk-lanches': wykLanches,
  'restaurant-1': restaurant1,
  'restaurant-2': restaurant2
}

export const restaurants = Object.values(data)
