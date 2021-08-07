import styled, { css } from 'styled-components'

export const Wrapper = styled.a`
  position: relative;
  display: block;
  background: var(--color-white);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-1);
  padding: 1rem;
  text-decoration: none;
  display: flex;
  transition: box-shadow 0.25s, transform 0.25s;

  &:hover {
    box-shadow: var(--shadow-2);
    transform: translateY(-1px);
  }

  @media (min-width: 992px) {
    padding: 1.5rem;
  }
`

export const ImageWrapper = styled.div`
  width: 3.5rem;
  height: 3.5rem;

  img {
    border-radius: 50%;
  }

  @media (min-width: 992px) {
    width: 4.5rem;
    height: 4.5rem;
  }
`

export const Detail = styled.div`
  padding-left: 0.75rem;
  margin-left: 0.75rem;
  border-left: 1px solid var(--color-gray-light);
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 992px) {
    padding-left: 1rem;
    margin-left: 1rem;
  }
`

export const Name = styled.h2`
  font: var(--font-body-16-semibold);
  color: var(--color-gray-dark);
  margin-bottom: 0.5rem;

  @media (min-width: 992px) {
    font: var(--font-body-18-semibold);
  }
`

export const Info = styled.p`
  font: var(--font-body-12);
  color: var(--color-gray);
`

type StatusOpenProps = {
  isOpen: boolean
}

export const StatusOpen = styled.div<StatusOpenProps>`
  ${({ isOpen }) => css`
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${isOpen ? 'var(--color-green)' : 'var(--color-red)'};

    @media (min-width: 992px) {
      top: 1.5rem;
      right: 1.5rem;
    }
  `}
`
