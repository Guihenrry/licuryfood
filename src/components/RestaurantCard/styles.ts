import styled, { css } from 'styled-components'

export const Wrapper = styled.a`
  position: relative;
  display: block;
  background: var(--color-white);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-1);
  padding: var(--space-16);
  text-decoration: none;
  display: flex;
  transition: box-shadow 0.25s, transform 0.25s;

  &:hover {
    box-shadow: var(--shadow-2);
    transform: translateY(-1px);
  }

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
  border-left: var(--space-1) solid var(--color-gray-light);
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 992px) {
    padding-left: var(--space-16);
    margin-left: var(--space-16);
  }
`

export const Name = styled.h2`
  font: var(--font-body-16-semibold);
  color: var(--color-gray-dark);
  margin-bottom: var(--space-8);

  @media (min-width: 992px) {
    font: var(--font-body-18-semibold);
  }
`

export const Info = styled.p`
  font: var(--font-body-12);
  color: var(--color-gray);
`
