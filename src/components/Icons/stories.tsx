import styled from 'styled-components'
import { Meta } from '@storybook/react'

import {
  Plus,
  Less,
  ChevronLeft,
  Pix,
  ChevronsRight,
  CreditCard,
  DollarSign,
  CheckCircle,
  ShoppingCart
} from '.'

export default {
  title: 'Icons'
} as Meta

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, var(--space-24));
  gap: var(--space-24);
  color: var(--color-gray-dark);
`

export const Icons = () => {
  return (
    <Wrapper>
      <Plus />
      <Less />
      <ChevronLeft />
      <Pix />
      <ChevronsRight />
      <CreditCard />
      <DollarSign />
      <CheckCircle />
      <ShoppingCart />
    </Wrapper>
  )
}
