import { ForwardedRef, forwardRef } from 'react'

import * as S from './styles'

type InputProps = {
  id: string
  label: string
  helperText?: string
  error?: boolean
} & React.InputHTMLAttributes<HTMLInputElement>

const Component = (
  { id, label, helperText, error = false, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <S.Wrapper>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Input id={id} error={error} ref={ref} {...props} />
      {helperText && <S.HelperText error={error}>{helperText}</S.HelperText>}
    </S.Wrapper>
  )
}

export const Input = forwardRef(Component)
