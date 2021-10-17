import { ForwardedRef, forwardRef } from 'react'
import * as S from './styles'

export type CheckboxWithLabelProps = {
  optionLeft: string
  optionRight: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const Component = (
  { optionLeft, optionRight, ...props }: CheckboxWithLabelProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <S.Wrapper>
      <S.Input type="checkbox" ref={ref} {...props} />
      <S.Option>{optionLeft}</S.Option>
      <S.Option>{optionRight}</S.Option>
    </S.Wrapper>
  )
}

export const CheckboxWithLabel = forwardRef(Component)
