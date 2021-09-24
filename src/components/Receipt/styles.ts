import styled from 'styled-components'

export const Wrapper = styled.section`
  position: relative;
  background: var(--color-yellow-light);
  padding: var(--space-24) var(--space-16) var(--space-32) var(--space-16);

  &:after {
    background-image: linear-gradient(
        135deg,
        var(--color-yellow-light) 0.5rem,
        transparent 0
      ),
      linear-gradient(-135deg, var(--color-yellow-light) 0.5rem, transparent 0);
    background-position: left-bottom;
    background-repeat: repeat-x;
    background-size: 1rem;
    content: '';
    display: block;
    position: absolute;
    bottom: -1rem;
    left: 0;
    width: 100%;
    height: 1rem;
  }

  &:before {
    background-image: linear-gradient(
        135deg,
        var(--color-yellow-light) 0.5rem,
        transparent 0
      ),
      linear-gradient(-135deg, var(--color-yellow-light) 0.5rem, transparent 0);
    background-position: left-bottom;
    background-repeat: repeat-x;
    background-size: 1rem;
    content: '';
    display: block;
    position: absolute;
    top: -1rem;
    left: 0;
    width: 100%;
    height: 1rem;
    transform: rotate(180deg);
  }

  @media (min-width: 768px) {
    padding-left: var(--space-24);
    padding-right: var(--space-24);
  }
`

export const Content = styled.div`
  & + & {
    margin-top: var(--space-64);
  }
`

export const ContentTitle = styled.h2`
  font: var(--font-body-12-semibold);
  color: var(--color-gray-dark);
  margin-bottom: var(--space-24);
`

export const ContentList = styled.ul`
  list-style: none;
`

export const ContentItem = styled.li`
  & + & {
    margin-top: var(--space-16);
    padding-top: var(--space-16);
    border-top: var(--space-1) solid var(--color-yellow);
  }
`

export const ContentText = styled.p`
  color: var(--color-gray-dark);
  display: flex;
  justify-content: space-between;

  span {
    font: var(--font-body-12);
  }

  strong {
    font: var(--font-body-12-semibold);
  }
`

export const Total = styled.p`
  color: var(--color-gray-dark);
  margin-top: var(--space-32);
  display: flex;
  justify-content: space-between;

  span {
    font: var(--font-body-18);
  }

  strong {
    font: var(--font-body-18-semibold);
  }
`
