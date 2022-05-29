import { Restaurant } from './types'

export const burgersDelicious: Restaurant = {
  slug: 'burgers-delicious',
  name: 'Burgers Delicious',
  image: '/images/burgers-delicious.png',
  backgroundImage: '/images/hamburgueria-background.jpg',
  category: 'Hamburgueria',
  acceptDelivery: true,
  deliveryPrice: 5,
  phone: '11999999999',
  paymentMethods: ['pix', 'cash', 'credit', 'debit', 'transfer'],
  menu: [
    {
      categoryTitle: 'Burgers',
      items: [
        {
          id: 'misto',
          name: 'Misto quente',
          description: 'Hambúrguer - Presunto - Queijo - Salada',
          price: 5
        },
        {
          id: 'x-salada',
          name: 'X-Salada',
          description: 'Hambúrguer - Queijo - Salada - Bacon',
          price: 8
        },
        {
          id: 'x-acon',
          name: 'X-Bacon',
          description: 'Hambúrguer - Queijo - Salada - Bacon',
          price: 10
        },
        {
          id: 'x-egg',
          name: 'X-Egg',
          description: 'Hambúrguer - Queijo - Salada - Ovo',
          price: 10
        },
        {
          id: 'x-frango',
          name: 'X-Frango',
          description: 'Hambúrguer - Queijo - Salada - Frango',
          price: 10
        },
        {
          id: 'x-tudo',
          name: 'X-Tudo',
          description: 'Hambúrguer - Presunto - Queijo - Salada - Bacon - Ovo',
          price: 15
        }
      ]
    }
  ]
}
