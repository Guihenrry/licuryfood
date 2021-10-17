import styled from 'styled-components'
import { ChevronLeft } from 'components/Icons'

export const Wrapper = styled.section`
  display: grid;
  position: relative;
`

export const Mask = styled.div`
  grid-area: 1/1;
  z-index: 1;
  background: rgba(38, 38, 38, 0.48);
  width: 100%;
  height: 100%;
`

export const Container = styled.div`
  grid-area: 1/1;
  z-index: 2;
  padding: var(--space-48) var(--space-16) var(--space-16) var(--space-16);

  display: flex;
  flex-direction: column;
  gap: var(--space-64);

  @media (min-width: 768px) {
    padding: var(--space-48) var(--space-32) var(--space-16) var(--space-32);
  }

  @media (min-width: 992px) {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
  }
`

export const BackLink = styled.a`
  color: var(--color-white);
  text-decoration: none;
  display: flex;
  gap: var(--space-8);
`

export const BackLinkIcon = styled(ChevronLeft)`
  width: var(--space-24);
  height: var(--space-24);
`

export const BackLinkText = styled.span`
  font: var(--font-body-16-semibold);
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`

export const Info = styled.div`
  background: rgba(38, 38, 38, 0.48);
  backdrop-filter: blur(8px);
  border-radius: var(--border-radius);
  padding: var(--space-16);
  display: flex;

  @media (min-width: 992px) {
    padding: var(--space-24);
  }
`

export const ImageWrapper = styled.div`
  width: var(--space-56);
  height: var(--space-56);

  img {
    border-radius: 50%;
  }

  @media (min-width: 992px) {
    width: var(--space-72);
    height: var(--space-72);
  }
`

export const Detail = styled.div`
  padding-left: var(--space-12);
  margin-left: var(--space-12);
  border-left: var(--space-1) solid var(--color-gray-dark);
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 992px) {
    padding-left: var(--space-16);
    margin-left: var(--space-16);
  }
`

export const Name = styled.h1`
  font: var(--font-body-16-semibold);
  color: var(--color-white);
  margin-bottom: var(--space-8);

  @media (min-width: 992px) {
    font: var(--font-body-18-semibold);
  }
`

export const Text = styled.p`
  font: var(--font-body-12);
  color: var(--color-white);
`
