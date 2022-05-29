import { Restaurant } from './types'

export const antonsAcaiteria: Restaurant = {
  slug: 'antons-acaiteria',
  name: "Anton's Açaiteria",
  image: '/images/antons-acaiteria.png',
  backgroundImage: '/images/acaiteria-background.jpg',
  category: 'Açaiteria',
  acceptDelivery: true,
  deliveryPrice: 5,
  phone: '11999999999',
  paymentMethods: ['pix', 'cash', 'credit', 'debit', 'transfer'],
  menu: [
    {
      categoryTitle: 'Açaí',
      items: [
        {
          id: 'acai-1',
          name: '1 litro',
          description:
            'Açaí natural sem glúten, cremoso e no pote de 1 litro com até 3 acompanhamentos a sua escolha.',
          price: 35,
          image: '/images/acai.png'
        },
        {
          id: 'acai-2',
          name: '480 ml',
          description:
            'Açaí natural sem glúten, cremoso e no pote de 480 ml com até 3 acompanhamentos a sua escolha.',
          price: 20,
          image: '/images/acai.png'
        },
        {
          id: 'acai-3',
          name: '355 ml',
          description:
            'Açaí natural sem glúten, cremoso e no pote de 355 ml com até 3 acompanhamentos a sua escolha.',
          price: 20,
          image: '/images/acai.png'
        }
      ]
    }
  ]
}
