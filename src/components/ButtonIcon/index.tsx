import * as S from './styles'

export type ButtonIconProps = {
  color?: 'green' | 'red'
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const ButtonIcon = ({
  color = 'green',
  children,
  onClick,
  ...props
}: ButtonIconProps) => {
  const addRippleElement = (event: React.MouseEvent<HTMLButtonElement>) => {
    const buttonElement = event.currentTarget
    const rippleElement = document.createElement('span')
    rippleElement.classList.add('ripple')
    buttonElement.insertAdjacentElement('beforeend', rippleElement)

    const buttonPositionData = buttonElement.getBoundingClientRect()

    const scale = buttonPositionData.height / 1.8
    const positionY = buttonPositionData.height / 2
    const positionX = buttonPositionData.width / 2

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
    <S.Button color={color} onClick={handleClick} {...props}>
      {children}
    </S.Button>
  )
}
