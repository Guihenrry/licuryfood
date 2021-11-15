import { Restaurant } from './types'

export const queSejaDoce: Restaurant = {
  slug: 'que-seja-doce',
  name: 'Que Seja Doce',
  image: '/images/que-seja-doce.jpg',
  backgroundImage: '/images/doces-background.jpg',
  category: 'Bolos & Doces',
  acceptDelivery: false,
  deliveryPrice: 0,
  phone: '5577991208594',
  paymentMethods: ['pix', 'cash'],
  menu: [
    {
      categoryTitle: 'Bolos em chantininho',
      items: [
        {
          id: 'chantininho-1',
          name: 'Massa tradicional - Pequena',
          price: 70
        },
        {
          id: 'chantininho-2',
          name: 'Massa tradicional - Média',
          price: 90
        },
        {
          id: 'chantininho-3',
          name: 'Massa tradicional - Grande',
          price: 110
        },
        {
          id: 'chantininho-4',
          name: 'Massa de cacau - Pequena',
          price: 80
        },
        {
          id: 'chantininho-5',
          name: 'Massa de cacau - Média',
          price: 100
        },
        {
          id: 'chantininho-6',
          name: 'Massa de cacau - Grande',
          price: 120
        }
      ]
    },
    {
      categoryTitle: 'Bolo de andar',
      items: [
        {
          id: 'andar-1',
          name: 'Massa branca',
          price: 140
        },
        {
          id: 'andar-2',
          name: 'Massa de cacau',
          price: 150
        }
      ]
    }
  ]
}
