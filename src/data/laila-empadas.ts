import { Restaurant } from './types'

export const lailaEmpadas: Restaurant = {
  slug: 'laila-empadas',
  name: 'Laila Empadas',
  image: '/images/laila-empadas.jpg',
  backgroundImage: '/images/salgados-background.jpg',
  category: 'Salgados',
  acceptDelivery: true,
  deliveryPrice: 1,
  phone: '5575982433778',
  paymentMethods: ['pix', 'cash'],
  menu: [
    {
      categoryTitle: 'Pequenas',
      items: [
        {
          id: 'pequenas-1',
          name: 'Empada de frango',
          price: 2
        },
        {
          id: 'pequenas-2',
          name: 'Empada de carne',
          price: 2.5
        },
        {
          id: 'pequenas-3',
          name: 'Empada de leite condensado',
          price: 2
        },
        {
          id: 'pequenas-4',
          name: 'Empada de mousse de limão',
          price: 2
        }
      ]
    },
    {
      categoryTitle: 'Grandes',
      items: [
        {
          id: 'grandes-1',
          name: 'Empada de frango',
          price: 3
        },
        {
          id: 'grandes-2',
          name: 'Empada de carne',
          price: 3.5
        },
        {
          id: 'grandes-3',
          name: 'Empada de leite condensado',
          price: 3
        },
        {
          id: 'grandes-4',
          name: 'Empada de mousse de limão',
          price: 3
        }
      ]
    }
  ]
}
