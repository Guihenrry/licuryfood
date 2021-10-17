import { Button } from 'components/Button'
import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: var(--space-36) var(--space-16) var(--space-48) var(--space-16);
  max-width: 864px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: var(--space-36) var(--space-32) var(--space-48) var(--space-32);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-32);
  }
`

export const BackLink = styled.a`
  display: flex;
  align-items: center;
  color: var(--color-gray-dark);
  text-decoration: none;
  padding: var(--space-12) 0;
  margin-bottom: var(--space-36);
  transition: color 0.2s linear;

  &:hover {
    color: var(--color-gray);
  }

  > svg {
    width: var(--space-24);
    height: var(--space-24);
  }

  @media (min-width: 768px) {
    grid-column: 1 / 3;
    margin-bottom: var(--space-4);
  }
`

export const BackLinkText = styled.span`
  display: none;

  @media (min-width: 768px) {
    display: inline-block;
    margin-left: var(--space-8);
    font: var(--font-body-16);
  }
`

export const Form = styled.form``

export const Subtitle = styled.h2`
  font: var(--font-heading-24);
  color: var(--color-gray-dark);
`

export const DeliveryInformation = styled.div`
  display: grid;
  gap: var(--space-24);
  margin-bottom: var(--space-48);

  ${Subtitle} {
    margin-bottom: var(--space-8);
  }
`

export const NumberAndCity = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-24);
`

type AddressProps = {
  hidden: boolean
}

export const Address = styled.div<AddressProps>`
  display: ${({ hidden }) => (hidden ? 'none' : 'grid')};
  gap: var(--space-24);
`

export const PaymentMethods = styled.div`
  display: grid;
  gap: var(--space-24);
  margin-bottom: var(--space-48);

  ${Subtitle} {
    margin-bottom: var(--space-8);
  }
`

export const PaymentMethodsError = styled.p`
  color: var(--color-red-dark);
  font: var(--font-body-12);
`

export const PaymentMethod = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  gap: var(--space-16);
`

export const PaymentMethodIcon = styled.div`
  background: var(--color-white);
  border-radius: var(--border-radius);
  padding: var(--space-12);
  width: var(--space-48);
  height: var(--space-48);

  svg {
    color: var(--color-gray);
  }
`

export const PaymentMethodText = styled.span`
  flex: 1;
`

type MoneyChangeProps = {
  hidden: boolean
}

export const MoneyChange = styled.div<MoneyChangeProps>`
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};
  margin-bottom: var(--space-56);

  ${Subtitle} {
    margin-bottom: var(--space-24);
  }
`

export const MoneyChangeText = styled.p`
  font: var(--font-body-16);
  color: var(--color-gray);
  margin-bottom: var(--space-24);
`

export const ReceiptMobileWrapper = styled.div`
  padding: var(--space-16) 0;
  margin-bottom: var(--space-48);

  @media (min-width: 768px) {
    display: none;
  }
`

export const SubmitButton = styled(Button)`
  width: 100%;
`

export const ReceiptWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    padding: var(--space-16) 0;
    position: sticky;
    top: var(--space-32);
    height: 100vh;
  }
`
