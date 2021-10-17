import React, { ForwardedRef, forwardRef } from 'react'

import * as S from './styles'

type ButtonTypes =
  | React.AnchorHTMLAttributes<HTMLAnchorElement>
  | React.ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  children: React.ReactNode
  variant?: 'contained' | 'text'
  fullWidth?: boolean
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void
  focus?: (options?: FocusOptions) => void
  as?: React.ElementType
} & ButtonTypes

export const Component = (
  {
    children,
    variant = 'contained',
    onClick,
    fullWidth = false,
    ...props
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement | HTMLAnchorElement>
) => {
  const addRippleElement = (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    const buttonElement = event.currentTarget
    const rippleElement = document.createElement('span')
    rippleElement.classList.add('ripple')
    buttonElement.insertAdjacentElement('beforeend', rippleElement)

    const buttonPositionData = buttonElement.getBoundingClientRect()

    const mousePositionY = event.clientY
    const mousePositionX = event.clientX
    const keyboardClick = mousePositionY === 0 && mousePositionX === 0

    const scale = buttonPositionData.height * 1.5
    const positionY = keyboardClick
      ? buttonPositionData.height / 2
      : mousePositionY - buttonPositionData.top
    const positionX = keyboardClick
      ? buttonPositionData.width / 2
      : mousePositionX - buttonPositionData.left

    rippleElement.style.setProperty('--position-y', `${positionY}px`)
    rippleElement.style.setProperty('--position-x', `${positionX}px`)
    rippleElement.style.setProperty('--opacity', '1')
    rippleElement.style.setProperty('--scale', scale.toString())

    function clearEffect() {
      rippleElement.removeEventListener('transitionend', clearEffect)
      rippleElement.style.setProperty('--opacity', '0')

      rippleElement.addEventListener('transitionend', () => {
        rippleElement.remove()
      })
    }

    rippleElement.addEventListener('transitionend', clearEffect)
  }

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    addRippleElement(event)
    if (typeof onClick === 'function') onClick(event)
  }

  return (
    <S.Button
      onClick={handleClick}
      variant={variant}
      fullWidth={fullWidth}
      ref={ref}
      {...props}
    >
      {children}
    </S.Button>
  )
}

export const Button = forwardRef(Component)
