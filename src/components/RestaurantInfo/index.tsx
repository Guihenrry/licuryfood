import { useMemo } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import * as S from './styles'

export type RestaurantInfoProps = {
  backgroundImage: string
  image: string
  name: string
  category: string
  deliveryPrice: number
}

export const RestaurantInfo = ({
  backgroundImage,
  category,
  name,
  image,
  deliveryPrice
}: RestaurantInfoProps) => {
  const deliveryPriceFormatted = useMemo(
    () =>
      new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(deliveryPrice),
    [deliveryPrice]
  )

  return (
    <S.Wrapper>
      <Image
        src={backgroundImage}
        layout="fill"
        alt={category}
        objectFit="cover"
      />

      <S.Mask />

      <S.Container>
        <Link href="/" passHref>
          <S.BackLink aria-label="Voltar para o inicio">
            <S.BackLinkIcon />

            <S.BackLinkText>Voltar</S.BackLinkText>
          </S.BackLink>
        </Link>

        <S.Info>
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
            <S.Text>
              {category} • Entrega {deliveryPriceFormatted}
            </S.Text>
          </S.Detail>
        </S.Info>
      </S.Container>
    </S.Wrapper>
  )
}
