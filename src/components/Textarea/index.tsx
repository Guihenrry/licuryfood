type TextareaProps = {
  id: string
  label: string
  helperText?: string
  error?: boolean
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>

import * as S from './styles'

export const Textarea = ({
  id,
  label,
  helperText,
  error = false,
  ...props
}: TextareaProps) => {
  return (
    <S.Wrapper>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Textarea id={id} error={error} {...props} />
      {helperText && <S.HelperText error={error}>{helperText}</S.HelperText>}
    </S.Wrapper>
  )
}
