import { Restaurant } from './types'

export const pizzaFamily: Restaurant = {
  slug: 'pizza-family',
  name: 'Pizza Family',
  image: '/images/pizza-family.png',
  backgroundImage: '/images/pizzaria-background.jpg',
  category: 'Pizzaria',
  acceptDelivery: true,
  deliveryPrice: 2,
  phone: '11999999999',
  paymentMethods: ['pix', 'cash', 'credit', 'debit', 'transfer'],
  menu: [
    {
      categoryTitle: 'Pizzas',
      items: [
        {
          id: 'frango-com-catupiry',
          name: 'Frango com catupiry',
          description:
            'Queijo Mussarela - Frango - Catupiry - milho - Azeitona - Orégano',
          price: 35
        },
        {
          id: 'calabresa',
          name: 'Calabresa',
          description:
            'Queijo Mussarela - Frango - Catupiry - milho - Azeitona - Orégano',
          price: 35
        },
        {
          id: 'bacon',
          name: 'Bacon',
          description:
            'Queijo Mussarela - Frango - Catupiry - milho - Azeitona - Orégano',
          price: 35
        },
        {
          id: '2-queijos',
          name: '2 queijos',
          description:
            'Queijo Mussarela - Frango - Catupiry - milho - Azeitona - Orégano',
          price: 35
        },
        {
          id: 'calabresa-2',
          name: 'Calabresa 2',
          description:
            'Queijo Mussarela - Frango - Catupiry - milho - Azeitona - Orégano',
          price: 35
        },
        {
          id: 'frango-com-catupiry',
          name: 'Frango com catupiry',
          description:
            'Queijo Mussarela - Frango - Catupiry - milho - Azeitona - Orégano',
          price: 35,
          image: '/images/pizza.png'
        }
      ]
    },
    {
      categoryTitle: 'Esfihas',
      items: [
        {
          id: 'esfihas-carne',
          name: 'Carne',
          price: 2.5,
          image: '/images/esfiha-carne.png'
        },
        {
          id: 'esfihas-queijo',
          name: 'Queijo',
          price: 3.5,
          image: '/images/esfiha-queijo.png'
        },
        {
          id: 'esfihas-frango',
          name: 'Frango',
          price: 3,
          image: '/images/esfiha-frango.png'
        },
        {
          id: 'esfihas-frango-com-catupiry',
          name: 'Frango com catupiry',
          price: 3,
          image: '/images/esfiha-frango-com-catupiry.png'
        }
      ]
    }
  ]
}
