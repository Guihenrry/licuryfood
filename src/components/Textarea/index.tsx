import { ForwardedRef, forwardRef } from 'react'

import * as S from './styles'

type TextareaProps = {
  id: string
  label: string
  helperText?: string
  error?: boolean
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>

export const Component = (
  { id, label, helperText, error = false, ...props }: TextareaProps,
  ref: ForwardedRef<HTMLTextAreaElement>
) => {
  return (
    <S.Wrapper>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Textarea id={id} error={error} ref={ref} {...props} />
      {helperText && <S.HelperText error={error}>{helperText}</S.HelperText>}
    </S.Wrapper>
  )
}

export const Textarea = forwardRef(Component)
