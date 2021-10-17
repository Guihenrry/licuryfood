import { ForwardedRef, forwardRef } from 'react'

import * as S from './styles'

export type RadioProps = React.InputHTMLAttributes<HTMLInputElement>

export const Component = (
  props: RadioProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <S.Wrapper>
      <S.Radio type="radio" ref={ref} {...props} />

      <S.Checkmark />
    </S.Wrapper>
  )
}

export const Radio = forwardRef(Component)
