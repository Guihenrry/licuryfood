import Link from 'next/link'

import { RestaurantCard } from 'components/RestaurantCard'

import * as S from './styles'

type Restaurant = {
  slug: string
  image: string
  name: string
  category: string
  deliveryPrice: number
}

export type TemplateHomeProps = {
  restaurants: Restaurant[]
}

export const TemplateHome = ({ restaurants }: TemplateHomeProps) => {
  return (
    <>
      <S.Header>
        <S.Logo />
      </S.Header>

      <S.Container>
        {restaurants.map((restaurant) => (
          <Link
            href={`/cardapio/${restaurant.slug}`}
            key={restaurant.slug}
            passHref
          >
            <RestaurantCard
              image={restaurant.image}
              name={restaurant.name}
              category={restaurant.category}
              deliveryPrice={restaurant.deliveryPrice}
            />
          </Link>
        ))}
      </S.Container>
    </>
  )
}
