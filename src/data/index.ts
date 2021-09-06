import { RestaurantsObject } from './types'

import { wykLanches } from './wyk-lanches'
import { restaurant1 } from './restaurant-1'
import { restaurant2 } from './restaurant-2'

export const data = {
  'wyk-lanches': wykLanches,
  'restaurant-1': restaurant1,
  'restaurant-2': restaurant2
} as RestaurantsObject

export const restaurants = Object.values(data)
