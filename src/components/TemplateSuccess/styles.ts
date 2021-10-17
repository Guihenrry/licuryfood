import styled from 'styled-components'
import { CheckCircle } from 'components/Icons'

export const Wrapper = styled.section`
  padding: var(--space-72) var(--space-16) var(--space-72) var(--space-16);
  max-width: 368px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    max-width: 416px;
  }
`

export const Icon = styled(CheckCircle)`
  color: var(--color-green);
  width: var(--space-64);
  height: var(--space-64);
  margin: 0 auto var(--space-24) auto;

  @media (min-width: 768px) {
    width: var(--space-80);
    height: var(--space-80);
  }
`

export const Title = styled.h1`
  font: var(--font-heading-32);
  color: var(--color-gray-dark);
  text-align: center;
  margin-bottom: var(--space-56);

  @media (min-width: 768px) {
    max-width: 384px;
    font: var(--font-heading-36);
    max-width: 336px;
    margin: 0 auto var(--space-72) auto;
  }
`

export const Actions = styled.div`
  display: flex;
  margin-bottom: var(--space-64);
`
