import { RestaurantsObject } from './types'

import { lailaEmpadas } from './laila-empadas'
import { queSejaDoce } from './que-seja-doce'

export const data = {
  'laila-empadas': lailaEmpadas,
  'que-seja-doce': queSejaDoce
} as RestaurantsObject

export const restaurants = Object.values(data)
