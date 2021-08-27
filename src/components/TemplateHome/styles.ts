import styled from 'styled-components'

import { Logo as LogoComponent } from 'components/Logo'

export const Header = styled.header`
  text-align: center;
  padding: var(--space-32) 0;

  @media (min-width: 768px) {
    padding: var(--space-48) 0;
  }
`

export const Logo = styled(LogoComponent)`
  height: var(--space-32);

  @media (min-width: 992px) {
    height: var(--space-48);
  }
`

export const Container = styled.main`
  display: grid;
  gap: var(--space-16);
  padding: 0 var(--space-16) var(--space-16) var(--space-16);

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-32);
    padding: 0 var(--space-32) var(--space-32) var(--space-32);
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 1280px;
    margin: 0 auto;
  }
`
