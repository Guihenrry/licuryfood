import * as S from './styles'

export type ChoiceProps = {
  optionLeft: string
  optionRight: string
  optionChosen: string
  onChange: (option: string) => void
}

export const Choice = ({
  optionLeft,
  optionRight,
  optionChosen,
  onChange
}: ChoiceProps) => {
  return (
    <S.Wrapper>
      <S.Highlight
        optionChosen={optionChosen === optionLeft ? 'left' : 'right'}
      />

      <S.Button
        isChosen={optionChosen === optionLeft}
        onClick={() => onChange(optionLeft)}
      >
        {optionLeft}
      </S.Button>
      <S.Button
        isChosen={optionChosen === optionRight}
        onClick={() => onChange(optionRight)}
      >
        {optionRight}
      </S.Button>
    </S.Wrapper>
  )
}
