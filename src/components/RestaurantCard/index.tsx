import Image from 'next/image'
import { forwardRef, useMemo } from 'react'

import * as S from './styles'

export type RestaurantCardProps = {
  image: string
  name: string
  category: string
  deliveryPrice: number
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

const Component: React.ForwardRefRenderFunction<
  HTMLAnchorElement,
  RestaurantCardProps
> = ({ image, name, category, deliveryPrice, ...props }, ref) => {
  const deliveryPriceFormatted = useMemo(
    () =>
      new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(deliveryPrice),
    [deliveryPrice]
  )

  return (
    <S.Wrapper ref={ref} {...props}>
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
          {category} • Entrega {deliveryPriceFormatted}
        </S.Info>
      </S.Detail>
    </S.Wrapper>
  )
}

export const RestaurantCard = forwardRef(Component)
