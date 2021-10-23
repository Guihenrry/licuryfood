import styled from 'styled-components'
import { Logo as LogoComponent } from 'components/Logo'

export const Wrapper = styled.section`
  padding: var(--space-48) var(--space-16) var(--space-72) var(--space-16);
  max-width: 50rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding-left: var(--space-32);
    padding-right: var(--space-32);
  }
`

export const Logo = styled(LogoComponent)`
  height: var(--space-32);
  margin-bottom: var(--space-48);
`

export const Title = styled.h1`
  font: var(--font-heading-24);
  color: var(--color-gray-dark);
  margin-bottom: var(--space-32);

  @media (min-width: 768px) {
    font: var(--font-heading-36);
  }
`

export const Text = styled.p`
  font: var(--font-body-16);
  color: var(--color-gray);
  margin-bottom: var(--space-24);
`

export const Subtitle = styled.h2`
  font: var(--font-body-18-semibold);
  color: var(--color-gray-dark);
  margin-bottom: var(--space-24);
  margin-top: var(--space-32);
`

export const List = styled.ul`
  padding-left: var(--space-32);
`

export const ListItem = styled.li``

export const ListText = styled.p`
  font: var(--font-body-16);
  color: var(--color-gray);
  margin-bottom: var(--space-16);
`

export const OrderedList = styled.ol`
  padding-left: var(--space-24);
  counter-reset: item;
  list-style: none;
`

export const OrderedListItem = styled.li`
  display: flex;
  &:before {
    content: counter(item) '. ';
    counter-increment: item;
    color: var(--color-gray);
    margin-right: var(--space-8);
  }
`

export const OrderedListText = styled.p`
  font: var(--font-body-16);
  color: var(--color-gray);
  margin-bottom: var(--space-16);
`
