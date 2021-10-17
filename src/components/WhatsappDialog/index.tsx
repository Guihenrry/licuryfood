import { useEffect, useRef } from 'react'

import { Button } from 'components/Button'

import * as S from './styles'

export type WhatsappDialogProps = {
  isOpen: boolean
  link: string
  onOutsideClick: () => void
  onCancelClick: () => void
  onContinueClick: () => void
  onKeyDownEsc: () => void
}

export const WhatsappDialog = ({
  link,
  isOpen,
  onOutsideClick,
  onCancelClick,
  onContinueClick,
  onKeyDownEsc
}: WhatsappDialogProps) => {
  const cancelButtonRef = useRef<HTMLButtonElement>()
  const continueLinkRef = useRef<HTMLAnchorElement>()

  const handleWrapperClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onOutsideClick()
  }

  const handleCancelClick = () => {
    onCancelClick()
  }

  const handleContinueClick = () => {
    onContinueClick()
  }

  const handleTabPressed = () => {
    if (document.activeElement === continueLinkRef.current) {
      cancelButtonRef.current?.focus()
    } else {
      continueLinkRef.current?.focus()
    }
  }

  useEffect(() => {
    if (isOpen) {
      continueLinkRef.current?.focus()
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onKeyDownEsc()
      }

      if (event.key === 'Tab' && isOpen) {
        handleTabPressed()
        event.preventDefault()
      }
    }

    window.addEventListener('keydown', handleKeydown)
    return () => window.removeEventListener('keydown', handleKeydown)
  }, [onKeyDownEsc, isOpen])

  return (
    <S.Wrapper
      isOpen={isOpen}
      onClick={handleWrapperClick}
      aria-hidden={!isOpen}
    >
      <S.Dialog
        role="dialog"
        aria-labelledby="whatsappDialogTitle"
        aria-describedby="whatsappDialogDescription"
      >
        <S.Title id="whatsappDialogTitle">Finalizar no Whatsapp</S.Title>
        <S.Description id="whatsappDialogDescription">
          Para finalizar o pedido você será redirecionado para o whatsapp do
          estabelecimento
        </S.Description>

        <S.Actions>
          <Button
            variant="text"
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ref={cancelButtonRef as any}
            onClick={handleCancelClick}
            tabIndex={isOpen ? 0 : -1}
          >
            Cancelar
          </Button>
          <Button
            as="a"
            href={link}
            rel="noreferrer noopener"
            target="_blank"
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ref={continueLinkRef as any}
            onClick={handleContinueClick}
            tabIndex={isOpen ? 0 : -1}
          >
            Continuar
          </Button>
        </S.Actions>
      </S.Dialog>
    </S.Wrapper>
  )
}
