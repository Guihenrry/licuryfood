import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { WhatsappDialog } from '.'

describe('<WhatsappDialog />', () => {
  it('should render dialog correctly', () => {
    render(
      <WhatsappDialog
        isOpen={true}
        link="https://www.link.com"
        onOutsideClick={jest.fn}
        onCancelClick={jest.fn}
        onContinueClick={jest.fn}
        onKeyDownEsc={jest.fn()}
      />
    )

    expect(
      screen.getByRole('dialog', { name: /Finalizar no Whatsapp/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Finalizar no Whatsapp/i })
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        'Para finalizar o pedido você será redirecionado para o whatsapp do estabelecimento'
      )
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Cancelar' })).toBeInTheDocument()

    const continueLink = screen.getByRole('link', { name: 'Continuar' })
    expect(continueLink).toHaveAttribute('href', 'https://www.link.com')
    expect(continueLink).toHaveAttribute('target', '_blank')
    expect(continueLink).toHaveAttribute('rel', 'noreferrer noopener')
  })

  it('should render dialog closed', () => {
    render(
      <WhatsappDialog
        isOpen={false}
        link="https://www.link.com"
        onOutsideClick={jest.fn()}
        onCancelClick={jest.fn()}
        onContinueClick={jest.fn()}
        onKeyDownEsc={jest.fn()}
      />
    )

    expect(
      screen.queryByRole('dialog', { name: /Finalizar no Whatsapp/i })
    ).not.toBeInTheDocument()

    expect(
      screen.queryByRole('heading', { name: /Finalizar no Whatsapp/i })
    ).not.toBeInTheDocument()

    expect(
      screen.queryByRole('button', { name: 'Cancelar' })
    ).not.toBeInTheDocument()

    expect(
      screen.queryByRole('link', { name: 'Continuar' })
    ).not.toBeInTheDocument()
  })

  it('should render dialog closed', () => {
    render(
      <WhatsappDialog
        isOpen={false}
        link="https://www.link.com"
        onOutsideClick={jest.fn()}
        onCancelClick={jest.fn()}
        onContinueClick={jest.fn()}
        onKeyDownEsc={jest.fn()}
      />
    )

    expect(
      screen.queryByRole('dialog', { name: /Finalizar no Whatsapp/i })
    ).not.toBeInTheDocument()

    expect(
      screen.queryByRole('heading', { name: /Finalizar no Whatsapp/i })
    ).not.toBeInTheDocument()

    expect(
      screen.queryByRole('button', { name: 'Cancelar' })
    ).not.toBeInTheDocument()

    expect(
      screen.queryByRole('link', { name: 'Continuar' })
    ).not.toBeInTheDocument()
  })

  it('shoudl call the callback functions', () => {
    const onOutsideClick = jest.fn()
    const onCancelClick = jest.fn()
    const onContinueClick = jest.fn()
    const onKeyDownEsc = jest.fn()

    render(
      <WhatsappDialog
        isOpen={true}
        link="https://www.link.com"
        onOutsideClick={onOutsideClick}
        onCancelClick={onCancelClick}
        onContinueClick={onContinueClick}
        onKeyDownEsc={onKeyDownEsc}
      />
    )

    const dialog = screen.getByRole('dialog')
    const dialogWrapper = dialog.parentElement as HTMLElement

    userEvent.click(dialog)
    expect(onOutsideClick).not.toHaveBeenCalled()

    userEvent.click(dialogWrapper)
    expect(onOutsideClick).toHaveBeenCalled()

    userEvent.click(screen.getByRole('button', { name: 'Cancelar' }))
    expect(onCancelClick).toHaveBeenCalled()

    userEvent.click(screen.getByRole('link', { name: 'Continuar' }))
    expect(onContinueClick).toHaveBeenCalled()

    fireEvent.keyDown(dialogWrapper, { key: 'a' })
    expect(onKeyDownEsc).not.toHaveBeenCalled()

    fireEvent.keyDown(dialogWrapper, { key: 'Escape' })
    expect(onKeyDownEsc).toHaveBeenCalled()
  })

  it('should focus on the buttons when the dialog is open', () => {
    const { container } = render(
      <WhatsappDialog
        isOpen={true}
        link="https://www.link.com"
        onOutsideClick={jest.fn()}
        onCancelClick={jest.fn()}
        onContinueClick={jest.fn()}
        onKeyDownEsc={jest.fn()}
      />
    )

    expect(screen.getByRole('link', { name: 'Continuar' })).toHaveFocus()

    fireEvent.keyDown(container, { key: 'Tab' })
    expect(screen.getByRole('button', { name: 'Cancelar' })).toHaveFocus()

    fireEvent.keyDown(container, { key: 'Tab' })
    expect(screen.getByRole('link', { name: 'Continuar' })).toHaveFocus()
  })

  it('should not focus on the buttons when the dialog is closed', () => {
    const { container } = render(
      <WhatsappDialog
        isOpen={false}
        link="https://www.link.com"
        onOutsideClick={jest.fn()}
        onCancelClick={jest.fn()}
        onContinueClick={jest.fn()}
        onKeyDownEsc={jest.fn()}
      />
    )

    expect(
      screen.getByRole('link', { name: 'Continuar', hidden: true })
    ).not.toHaveFocus()

    fireEvent.keyDown(container, { key: 'Tab' })
    expect(
      screen.getByRole('button', { name: 'Cancelar', hidden: true })
    ).not.toHaveFocus()

    fireEvent.keyDown(container, { key: 'Tab' })
    expect(
      screen.getByRole('link', { name: 'Continuar', hidden: true })
    ).not.toHaveFocus()
  })
})
