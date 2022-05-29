import { RestaurantsObject } from './types'

import { pizzariaDelicious } from './pizzaria-delicious'
import { pizzaFamily } from './pizza-family'
import { superPizza } from './super-pizza'
import { pastelariaTiburcio } from './pastelaria-tiburcio'
import { antonsAcaiteria } from './antons-acaiteria'
import { burgersDelicious } from './burgers-delicious'

export const data = {
  'pizzaria-delicious': pizzariaDelicious,
  'pizza-family': pizzaFamily,
  'super-pizza': superPizza,
  'pastelaria-tiburcio': pastelariaTiburcio,
  'antons-acaiteria': antonsAcaiteria,
  'burgers-delicious': burgersDelicious
} as RestaurantsObject

export const restaurants = Object.values(data)
