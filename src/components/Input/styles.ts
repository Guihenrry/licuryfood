import styled, { css } from 'styled-components'
import { cssVar, rgba } from 'polished'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
`

export const Label = styled.label`
  font: var(--font-body-18);
  color: var(--color-gray-dark);
`

type InputProps = {
  error: boolean
}

export const inputModifiers = {
  error: () => css`
    border-color: var(--color-red-dark);
  `
}

export const Input = styled.input<InputProps>`
  ${({ error }) => css`
    font: var(--font-body-16);
    color: var(--color-gray-dark);
    border: var(--space-1) solid var(--color-gray);
    border-radius: var(--border-radius);
    padding: var(--space-16);
    transition: border 0.25s, box-shadow 0.25s;

    &:hover:not(:disabled) {
      border: var(--space-1) solid var(--color-gray-dark);
    }

    &:focus:not(:disabled) {
      outline: none;
      border: var(--space-1) solid var(--color-green-dark);
      box-shadow: 0px 0px 0px 4px
        ${rgba(cssVar('--color-green-dark', '#3E9469'), 0.25)};
    }

    ${error && inputModifiers.error()}
  `}
`

type helperTextProps = {
  error: boolean
}

export const helperTextModifiers = {
  error: () => css`
    color: var(--color-red-dark);
  `
}

export const HelperText = styled.p<helperTextProps>`
  ${({ error }) => css`
    font: var(--font-body-12);
    color: var(--color-gray);

    ${error && helperTextModifiers.error()}
  `}
`
