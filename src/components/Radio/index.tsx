import * as S from './styles'

export type RadioProps = React.InputHTMLAttributes<HTMLInputElement>

export const Radio = (props: RadioProps) => {
  return (
    <S.Wrapper>
      <S.Radio type="radio" {...props} />

      <S.Checkmark />
    </S.Wrapper>
  )
}
