import styled from 'styled-components'

export const Category = styled.section`
  padding: var(--space-56) var(--space-16) 0 var(--space-16);

  & + & {
    padding-bottom: var(--space-80);
  }

  @media (min-width: 768px) {
    padding-left: var(--space-32);
    padding-right: var(--space-32);

    & + & {
      padding-bottom: var(--space-88);
    }
  }

  @media (min-width: 992px) {
    max-width: 1280px;
    margin: 0 auto;
  }
`

export const CategoryTitle = styled.h2``

export const ProductList = styled.ul`
  list-style: none;
  margin-top: var(--space-24);
  display: grid;
  gap: var(--space-24);

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const ProductItem = styled.li``

export const CheckoutButtonQuantity = styled.span`
  position: absolute;
  top: -1px;
  right: -6px;
  font: var(--font-body-9);
  background: var(--color-white);
  color: var(--color-green);
  width: 0.8125rem;
  height: 0.8125rem;
  border: var(--space-1) solid var(--color-green-dark);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

type CheckoutLinkProps = {
  disabled: boolean
}

export const CheckoutLink = styled.a<CheckoutLinkProps>`
  position: fixed;
  bottom: ${({ disabled }) => (disabled ? '-56px' : 0)};
  left: 0;
  width: 100%;
  border: none;
  cursor: pointer;
  color: var(--color-white);
  text-decoration: none;
  background-color: var(--color-green-dark);
  transition: background-color 0.25s, bottom 0.25s;

  &:hover {
    background-color: var(--color-green);
  }

  &:active {
    background-color: var(--color-green-dark);
  }

  &:hover ${CheckoutButtonQuantity} {
    border-color: var(--color-green);
    color: var(--color-green);
  }
`

export const CheckoutButtonContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--space-16);
  height: var(--space-56);

  @media (min-width: 768px) {
    padding: 0 var(--space-32);
  }

  @media (min-width: 992px) {
    max-width: 1280px;
    margin: 0 auto;
  }
`

export const CheckoutButtonIcon = styled.div`
  position: relative;
  width: var(--space-24);
  height: var(--space-24);
`

export const CheckoutButtonText = styled.span`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font: var(--font-body-12-semibold);

  @media (min-width: 768px) {
    font: var(--font-body-16-semibold);
  }
`

export const CheckoutButtonPrice = styled.span`
  font: var(--font-body-12-semibold);

  @media (min-width: 768px) {
    font: var(--font-body-16-semibold);
  }
`
