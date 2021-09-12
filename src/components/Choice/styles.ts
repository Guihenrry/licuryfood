import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  padding: var(--space-8);
  display: flex;
  gap: var(--space-8);
  background: var(--color-white);
  box-shadow: var(--shadow-1);
  border-radius: var(--space-8);
`

type HighlightProps = {
  optionChosen: 'left' | 'right'
}

const highlightModifiers = {
  left: () => css`
    transform: translateX(0);
  `,
  right: () => css`
    transform: translateX(calc(100% + var(--space-8)));
  `
}

export const Highlight = styled.span<HighlightProps>`
  ${({ optionChosen }) => css`
    position: absolute;
    width: calc(50% - var(--space-12));
    height: calc(100% - var(--space-16));
    background: var(--color-green);
    border-radius: var(--space-8);
    transition: transform 0.3s ease-out;

    ${highlightModifiers[optionChosen]()}
  `}
`

type ButtonProps = {
  isChosen: boolean
}

const buttonModifiers = {
  default: () => css`
    color: var(--color-gray);
  `,
  chosen: () => css`
    color: var(--color-white);
  `
}

export const Button = styled.button<ButtonProps>`
  ${({ isChosen }) => css`
    position: relative;
    flex: 1;
    font: var(--font-body-16-semibold);
    padding: var(--space-8);
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.2s ease-out;

    ${isChosen ? buttonModifiers.chosen() : buttonModifiers.default()}
  `}
`
