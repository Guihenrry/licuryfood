import styled from 'styled-components'

export const Wrapper = styled.span`
  position: relative;
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

export const Checkmark = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  transition: background-color 0.25s;

  &:after {
    content: '';
    display: block;
    min-width: 20px;
    min-height: 20px;
    border-radius: 50%;
    border: 2px solid var(--color-gray);
    transition: border-color 0.25s;
  }
`

export const Radio = styled.input`
  appearance: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;
  opacity: 0;
  background: var(--color-gray);
  transition: opacity 0.25s, background-color 0.25s, transform 0.25s;

  &:checked {
    background: var(--color-green);
  }

  &:hover:not(:disabled) {
    opacity: 0.08;
  }

  &:focus:not(:disabled) {
    opacity: 0.16;
    outline: none;
  }

  &:active:not(:disabled) {
    opacity: 0.32;
    transform: scale(1.2);
  }

  &:disabled {
    opacity: 0;
    cursor: not-allowed;
  }

  &:checked ~ ${Checkmark} {
    background: var(--color-green);
  }

  &:checked ~ ${Checkmark}:after {
    border-color: var(--color-green);
  }

  &:disabled ~ ${Checkmark} {
    opacity: 0.6;
  }

  &:checked:disabled ~ ${Checkmark} {
    background: var(--color-gray);
  }

  &:checked:disabled ~ ${Checkmark}:after {
    border-color: var(--color-gray);
  }
`
