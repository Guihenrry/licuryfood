import { Restaurant } from './types'

export const restaurant1: Restaurant = {
  slug: 'restaurant-1',
  name: 'Restaurant 1',
  image: '/storybook/pizzaria-avatar.png',
  backgroundImage: '/storybook/pizzaria-background.jpg',
  category: 'category-1',
  deliveryPrice: 1,
  phone: '5511984625995',
  paymentMethods: ['pix', 'transfer', 'credit', 'debit', 'cash'],
  menu: [
    {
      categoryTitle: 'Pizzas',
      items: [
        {
          id: 'pizzas-1',
          name: '2 Queijos',
          description:
            'Queijo Mussarela - Queijo Parmesão - Azeitona - Orégano',
          price: 35
        },
        {
          id: 'pizzas-2',
          name: '4 Queijos',
          description:
            'Queijo Mussarela - Queijo Parmesão - Cheddar - Azeitona - Orégano - Catupiry',
          price: 35
        },
        {
          id: 'pizzas-3',
          name: 'Bacon',
          description: 'Queijo Mussarela - Bacon - Cebola - Orégano',
          price: 35,
          image: '/storybook/pizza.png'
        }
      ]
    },
    {
      categoryTitle: 'Esfihas',
      items: [
        {
          id: 'esfihas-1',
          name: 'Carne',
          price: 3
        },
        {
          id: 'esfihas-2',
          name: 'Frango',
          price: 2.5
        },
        {
          id: 'esfihas-3',
          name: 'Frango com catupiry',
          price: 2.5
        },
        {
          id: 'esfihas-4',
          name: 'Calabrea',
          price: 2.5
        },
        {
          id: 'esfihas-5',
          name: 'Calabresa',
          price: 2.5
        },
        {
          id: 'esfihas-6',
          name: 'Calabresa com catupiry',
          price: 2.5
        },
        {
          id: 'esfihas-7',
          name: '3 queijos',
          price: 2.5
        }
      ]
    }
  ]
}
