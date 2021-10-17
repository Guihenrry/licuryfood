import styled from 'styled-components'

export const Wrapper = styled.label`
  position: relative;
  padding: var(--space-8);
  display: flex;
  gap: var(--space-8);
  background: var(--color-white);
  box-shadow: var(--shadow-1);
  border-radius: var(--space-8);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`

export const Option = styled.span`
  position: relative;
  flex: 1;
  font: var(--font-body-16-semibold);
  padding: var(--space-8);
  background: none;
  border: none;
  transition: color 0.2s ease-out;
  text-align: center;
  color: var(--color-gray);
`

export const Input = styled.input`
  appearance: none;
  width: 0;
  height: 0;

  &:focus-visible:after {
    box-shadow: 0px 0px 0px 4px rgb(62 148 105 / 25%);
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    width: calc(50% - var(--space-12));
    height: calc(100% - var(--space-16));
    background: var(--color-green);
    border-radius: var(--space-8);
    transition: transform 0.3s ease-out;
  }

  &:not(:checked):after {
    transform: translateX(0);
  }

  &:checked:after {
    transform: translateX(calc(100% + var(--space-8)));
  }

  &:not(:checked) + ${Option} {
    color: var(--color-white);
  }

  &:checked ~ ${Option}:last-child {
    color: var(--color-white);
  }
`
