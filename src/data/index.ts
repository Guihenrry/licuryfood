import { RestaurantsObject } from './types'

import { wykLanches } from './wyk-lanches'
import { lailaEmpadas } from './laila-empadas'
import { queSejaDoce } from './que-seja-doce'

export const data = {
  'wyk-lanches': wykLanches,
  'laila-empadas': lailaEmpadas,
  'que-seja-doce': queSejaDoce
} as RestaurantsObject

export const restaurants = Object.values(data)
