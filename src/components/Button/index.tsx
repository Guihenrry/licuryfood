import React from 'react'

import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode
  variant?: 'contained' | 'text'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
  children,
  variant = 'contained',
  onClick,
  ...props
}: ButtonProps) => {
  const addRippleElement = (event: React.MouseEvent<HTMLButtonElement>) => {
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

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    addRippleElement(event)
    if (typeof onClick === 'function') onClick(event)
  }

  return (
    <S.Button onClick={handleClick} variant={variant} {...props}>
      {children}
    </S.Button>
  )
}
