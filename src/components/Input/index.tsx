import * as S from './styles'

type InputProps = {
  id: string
  label: string
  helperText?: string
  error?: boolean
} & React.InputHTMLAttributes<HTMLInputElement>

export const Input = ({
  id,
  label,
  helperText,
  error = false,
  ...props
}: InputProps) => {
  return (
    <S.Wrapper>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Input id={id} error={error} {...props} />
      {helperText && <S.HelperText error={error}>{helperText}</S.HelperText>}
    </S.Wrapper>
  )
}
