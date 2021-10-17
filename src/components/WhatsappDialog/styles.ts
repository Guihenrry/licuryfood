import styled, { css } from 'styled-components'

export const Dialog = styled.div`
  background: var(--color-white);
  border-radius: var(--border-radius);
  width: 100%;
  max-width: 18rem;
  padding: var(--space-24);
  transition: transform 0.3s ease-in-out;
`

type WrapperProps = {
  isOpen: boolean
}

const wrapperModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: all;

    ${Dialog} {
      transform: translateY(0px);
    }
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;

    ${Dialog} {
      transform: translateY(-40px);
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ isOpen }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.24);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 50;
    transition: opacity 0.3s ease-in-out;

    ${isOpen && wrapperModifiers.open()}
    ${!isOpen && wrapperModifiers.close()}
  `}
`

export const Title = styled.h1`
  font: var(--font-heading-24);
  font-size: 1.375rem;
  margin-bottom: var(--space-24);
  color: var(--color-gray-dark);
`

export const Description = styled.p`
  font: var(--font-body-16);
  margin-bottom: var(--space-24);
  color: var(--color-gray-dark);
`

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
`
