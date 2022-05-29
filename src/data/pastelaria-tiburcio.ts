import { Restaurant } from './types'

export const pastelariaTiburcio: Restaurant = {
  slug: 'pastelaria-tiburcio',
  name: 'Pastelaria Tiburcio',
  image: '/images/pastelaria-tiburcio.png',
  backgroundImage: '/images/pastelaria-background.png',
  category: 'Pastelaria',
  acceptDelivery: true,
  deliveryPrice: 0,
  phone: '11999999999',
  paymentMethods: ['pix', 'cash', 'credit', 'debit', 'transfer'],
  menu: [
    {
      categoryTitle: 'Pasteis',
      items: [
        {
          id: 'frango',
          name: 'Frango',
          price: 5
        },
        {
          id: 'calabresa',
          name: 'Calabresa',
          price: 5
        },
        {
          id: 'bacon',
          name: 'Bacon',
          price: 5
        },
        {
          id: '2-queijos',
          name: '2 queijos',
          price: 5
        },
        {
          id: 'calabresa-2',
          name: 'Calabresa 2',
          price: 5
        },
        {
          id: 'frango-com-catupiry',
          name: 'Frango com catupiry',
          price: 5
        }
      ]
    }
  ]
}
