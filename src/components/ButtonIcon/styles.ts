import styled, { css } from 'styled-components'
import { cssVar, rgba } from 'polished'

type ButtonProps = {
  color: 'green' | 'red'
}

const buttonModifiers = {
  green: () => css`
    background: var(--color-green);
    color: var(--color-white);

    &:hover:not(:disabled) {
      background: var(--color-green-dark);
      box-shadow: 0px 0px 0px 4px
        ${rgba(cssVar('--color-green-dark', '#3E9469'), 0.08)};
    }

    &:focus:not(:disabled) {
      outline: none;
      background: var(--color-green-dark);
      box-shadow: 0px 0px 0px 4px
        ${rgba(cssVar('--color-green-dark', '#3E9469'), 0.24)};
    }

    &:active:not(:disabled) {
      background: var(--color-green);
    }
  `,
  red: () => css`
    background: var(--color-red-light);
    color: var(--color-red-dark);

    &:hover:not(:disabled) {
      box-shadow: 0px 0px 0px 4px
        ${rgba(cssVar('--color-red-dark', '#D23137'), 0.08)};
    }

    &:focus:not(:disabled) {
      outline: none;
      box-shadow: 0px 0px 0px 4px
        ${rgba(cssVar('--color-red-dark', '#D23137'), 0.16)};
    }
  `
}

export const Button = styled.button<ButtonProps>`
  ${({ color }) => css`
    width: var(--space-32);
    height: var(--space-32);
    border-radius: var(--border-radius);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.25s;
    position: relative;
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;

    &:disabled {
      cursor: not-allowed;
    }

    > svg {
      width: var(--space-24);
      height: var(--space-24);
    }

    > .ripple {
      --position-y: 0;
      --position-x: 0;
      --scale: 10;
      --opacity: 0;

      pointer-events: none;
      display: block;
      width: 1px;
      height: 1px;
      position: absolute;
      top: 0;
      left: 0;

      will-change: transform;
      transform: translate3d(var(--position-x), var(--position-y), 0);
    }

    > .ripple::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 2px;
      height: 2px;
      background: rgba(255, 255, 255, 0.24);

      will-change: transform;
      transition: transform 0.5s, opacity 0.3s;
      transform: scale(var(--scale));
      opacity: var(--opacity);
    }

    ${buttonModifiers[color]()}
  `}
`
