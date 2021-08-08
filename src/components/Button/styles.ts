import styled, { css } from 'styled-components'
import { cssVar, rgba } from 'polished'

type ButtonProps = {
  variant: 'contained' | 'text'
}

const buttonModifiers = {
  contained: () => css`
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
  text: () => css`
    background: transparent;
    color: var(--color-gray-dark);

    &:hover:not(:disabled) {
      background: ${rgba(cssVar('--color-green-light', '#83C8AA'), 0.32)};
      box-shadow: 0px 0px 0px 4px
        ${rgba(cssVar('--color-green-dark', '#3E9469'), 0.08)};
    }

    &:focus:not(:disabled) {
      outline: none;
      background: var(--color-green-light);
      box-shadow: 0px 0px 0px 4px
        ${rgba(cssVar('--color-green-dark', '#3E9469'), 0.24)};
    }
  `
}

export const Button = styled.button<ButtonProps>`
  ${({ variant }) => css`
    font: var(--font-body-18-semibold);
    padding: var(--space-16);
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;

    transition: 0.25s;
    position: relative;
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;

    &:disabled {
      cursor: not-allowed;
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

    ${buttonModifiers[variant]()}
  `}
`
