import NextImage from 'next/image'
import styled from 'styled-components'

export const Wrapper = styled.article`
  background: var(--color-white);
  padding: var(--space-16);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-1);
  display: flex;
  align-items: flex-start;
  gap: var(--space-12);
  height: 100%;

  @media (min-width: 768px) {
    padding: var(--space-24);
    gap: var(--space-16);
  }
`

export const Image = styled(NextImage)`
  border-radius: var(--border-radius);
`

export const Details = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--space-16);
`

export const DetailsHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
`

export const Name = styled.h1`
  font: var(--font-body-16-semibold);
  color: var(--color-gray-dark);

  @media (min-width: 768px) {
    font: var(--font-body-18-semibold);
  }
`

export const Description = styled.p`
  font: var(--font-body-12);
  color: var(--color-gray);
`

export const DetailsFooter = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Price = styled.p`
  font: var(--font-body-16-semibold);
  color: var(--color-gray-dark);

  display: flex;
  gap: var(--space-4);
`

export const MoneySign = styled.span`
  font: var(--font-body-9);
  color: var(--color-green-dark);
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
`

export const Quantity = styled.span`
  font: var(--font-body-16-semibold);
  margin: 0 var(--space-16);
`
