import { useMemo } from 'react'

import { ButtonIcon } from 'components/ButtonIcon'
import { Less, Plus } from 'components/Icons'

import * as S from './styles'

export type ProductCardProps = {
  image?: string
  name: string
  description?: string
  price: number
  quantity: number
  onPlus: () => void
  onLess: () => void
}

export const ProductCard = ({
  image,
  name,
  description,
  price,
  quantity,
  onPlus,
  onLess
}: ProductCardProps) => {
  const priceFormatted = useMemo(
    () => price.toLocaleString('pt-br', { minimumFractionDigits: 2 }),
    [price]
  )

  return (
    <S.Wrapper>
      {image && <S.Image src={image} width={72} height={72} alt={name} />}

      <S.Details>
        <S.DetailsHeader>
          <S.Name>{name}</S.Name>
          {description && <S.Description>{description}</S.Description>}
        </S.DetailsHeader>

        <S.DetailsFooter>
          <S.Price>
            <S.MoneySign>R$</S.MoneySign>
            {priceFormatted}
          </S.Price>

          <S.Actions>
            {quantity > 0 && (
              <>
                <ButtonIcon
                  color="red"
                  title="Remover item ao pedido"
                  onClick={onLess}
                >
                  <Less />
                </ButtonIcon>
                <S.Quantity>{quantity}</S.Quantity>
              </>
            )}

            <ButtonIcon title="Adicionar item ao pedido" onClick={onPlus}>
              <Plus />
            </ButtonIcon>
          </S.Actions>
        </S.DetailsFooter>
      </S.Details>
    </S.Wrapper>
  )
}
