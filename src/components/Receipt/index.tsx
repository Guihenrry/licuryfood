import * as S from './styles'

type Item = {
  name: string
  value: string
}

type Content = {
  title?: string
  itens: Item[]
}

export type ReceiptProps = {
  total: string
  contents: Content[]
}

export const Receipt = ({ total, contents }: ReceiptProps) => {
  return (
    <S.Wrapper>
      {contents.map((content, index) => (
        <S.Content key={`${content.title}-${index}`}>
          {content.title && <S.ContentTitle>{content.title}</S.ContentTitle>}
          <S.ContentList>
            {content.itens.map((item) => (
              <S.ContentItem key={item.name}>
                <S.ContentText>
                  <span>{item.name}</span>
                  <strong>{item.value}</strong>
                </S.ContentText>
              </S.ContentItem>
            ))}
          </S.ContentList>
        </S.Content>
      ))}

      <S.Total>
        <span>Total</span>
        <strong>{total}</strong>
      </S.Total>
    </S.Wrapper>
  )
}
