import Image from 'next/image'
import { forwardRef } from 'react'

import * as S from './styles'

export type RestaurantCardProps = {
  image: string
  name: string
  category: string
  deliveryPrice: string
  isOpen: boolean
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

const Component: React.ForwardRefRenderFunction<
  HTMLAnchorElement,
  RestaurantCardProps
> = ({ image, name, category, deliveryPrice, isOpen, ...props }, ref) => {
  return (
    <S.Wrapper ref={ref} {...props}>
      <S.StatusOpen isOpen={isOpen} />

      <S.ImageWrapper>
        <Image
          src={image}
          alt={name}
          width={72}
          height={72}
          objectFit="cover"
        />
      </S.ImageWrapper>

      <S.Detail>
        <S.Name>{name}</S.Name>
        <S.Info>
          {category} • Entrega {deliveryPrice}
        </S.Info>
      </S.Detail>
    </S.Wrapper>
  )
}

export const RestaurantCard = forwardRef(Component)
