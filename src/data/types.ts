export type Product = {
  id: string
  image?: string
  name: string
  description?: string
  price: number
}

type MenuCategory = {
  categoryTitle: string
  items: Product[]
}

type PaymentMethod = 'cash' | 'debit' | 'credit' | 'transfer' | 'pix'

export type Restaurant = {
  slug: string
  name: string
  image: string
  backgroundImage: string
  category: string
  acceptDelivery: boolean
  deliveryPrice: number
  phone: string
  paymentMethods: PaymentMethod[]
  menu: MenuCategory[]
}

export type RestaurantsObject = {
  [key: string]: Restaurant
}
