import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState, useRef } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useCart } from 'hooks/useCart'
import { formatPrice } from 'utils/formatPrice'
import { getLocalStorage, setLocalStorage } from 'utils/localStorage'
import { generateWhatsappMessage } from 'utils/generateWhatsappMessage'

import {
  ChevronLeft,
  ChevronsRight,
  CreditCard,
  DollarSign,
  Pix
} from 'components/Icons'
import { Input } from 'components/Input'
import { Textarea } from 'components/Textarea'
import { CheckboxWithLabel } from 'components/CheckboxWithLabel'
import { Radio } from 'components/Radio'
import { Receipt } from 'components/Receipt'

import { schema } from './validation'
import * as S from './styles'
import { WhatsappDialog } from 'components/WhatsappDialog'

type PaymentMethod = 'cash' | 'debit' | 'credit' | 'transfer' | 'pix'

export type TemplateCheckoutProps = {
  slug: string
  acceptDelivery: boolean
  deliveryPrice: number
  paymentMethods: PaymentMethod[]
  phone: string
}

type FormData = {
  name: string
  withdrawal: boolean
  address: string
  number: string
  city: string
  complement: string
  note: string
  payment_method: string
  money_change: string
}

const paymentMethodConfig = {
  pix: {
    icon: Pix,
    value: 'PIX'
  },
  transfer: {
    icon: ChevronsRight,
    value: 'Transferência'
  },
  credit: {
    icon: CreditCard,
    value: 'Cartão de crédito'
  },
  debit: {
    icon: CreditCard,
    value: 'Cartão de débito'
  },
  cash: {
    icon: DollarSign,
    value: 'Dinheiro'
  }
}

export const TemplateCheckout = ({
  slug,
  acceptDelivery,
  deliveryPrice,
  paymentMethods,
  phone
}: TemplateCheckoutProps) => {
  const { items, clearCartBySlug } = useCart()
  const router = useRouter()
  const submitButtonRef = useRef<HTMLButtonElement>()
  const cart = useMemo(() => (items[slug] ? items[slug] : []), [items, slug])
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      withdrawal: !acceptDelivery
    }
  })
  const [whatsappDialogProps, setWhatsappDialogProps] = useState({
    isOpen: false,
    link: ''
  })

  const deliveryPriceFormatted = formatPrice(deliveryPrice)

  const products = cart.map((item) => ({
    name: `${item.quantity}x ${item.category} ${item.name}`,
    value: formatPrice(item.price * item.quantity)
  }))

  const priceTotal = formatPrice(
    cart.reduce((accumulator, product) => {
      return product.quantity * product.price + accumulator
    }, 0) + (watch('withdrawal') ? 0 : deliveryPrice)
  )

  useEffect(() => {
    const formData: FormData = getLocalStorage('lastOrder')

    if (formData) {
      setValue('name', formData.name)
      setValue('address', formData.address)
      setValue('number', formData.number)
      setValue('city', formData.city)
      setValue('complement', formData.complement)

      const currentPaymentMethods = paymentMethods.map(
        (paymentMethod) => paymentMethodConfig[paymentMethod].value
      )
      if (currentPaymentMethods.includes(formData.payment_method)) {
        setValue('payment_method', formData.payment_method)
      }
    }
  }, [setValue, paymentMethods])

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setLocalStorage('lastOrder', {
      ...data,
      products,
      deliveryPriceFormatted,
      priceTotal
    })

    const productsItens = products.map(
      (product) => `${product.name} - ${product.value}`
    )

    if (!data.withdrawal) {
      productsItens.push(`Taxa de entrega - ${deliveryPriceFormatted}`)
    }

    const message = generateWhatsappMessage({
      deliveryInformation: {
        name: data.name,
        withdrawal: data.withdrawal,
        address: data.address,
        number: data.number,
        city: data.city,
        complement: data.complement,
        note: data.note
      },
      paymentInformation: {
        payment_method: data.payment_method,
        money_change: formatPrice(Number(data.money_change))
      },
      orderInformation: {
        total: priceTotal,
        orderItems: [...productsItens]
      }
    })

    const messageEncode = window.encodeURIComponent(message)
    const linkWhatsapp = `https://api.whatsapp.com/send?phone=${phone}&text=${messageEncode}`

    setWhatsappDialogProps({
      link: linkWhatsapp,
      isOpen: true
    })
  }

  const handleCloseDialog = () => {
    setWhatsappDialogProps((state) => ({ ...state, isOpen: false }))
    submitButtonRef.current?.focus()
  }

  const handleWhatsappLinkClick = () => {
    clearCartBySlug(slug)
    router.push('/sucesso')
  }

  return (
    <>
      <WhatsappDialog
        isOpen={whatsappDialogProps.isOpen}
        link={whatsappDialogProps.link}
        onCancelClick={handleCloseDialog}
        onOutsideClick={handleCloseDialog}
        onKeyDownEsc={handleCloseDialog}
        onContinueClick={handleWhatsappLinkClick}
      />

      <S.Wrapper>
        <Link href={`/cardapio/${slug}`} passHref>
          <S.BackLink title="Voltar para o cardápio">
            <ChevronLeft />
            <S.BackLinkText>Voltar</S.BackLinkText>
          </S.BackLink>
        </Link>

        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.DeliveryInformation>
            <S.Subtitle>Informações da entrega</S.Subtitle>
            <Input
              id="name"
              label="Nome"
              helperText={errors.name?.message}
              error={!!errors.name?.message}
              {...register('name')}
            />

            {acceptDelivery && (
              <CheckboxWithLabel
                optionLeft="Entrega"
                optionRight="Retirada"
                {...register('withdrawal')}
              />
            )}

            <S.Address hidden={watch('withdrawal')}>
              <Input
                id="address"
                label="Endereço"
                helperText={errors.address?.message}
                error={!!errors.address?.message}
                {...register('address')}
              />
              <S.NumberAndCity>
                <Input
                  id="number"
                  label="Número"
                  helperText={errors.number?.message}
                  error={!!errors.number?.message}
                  {...register('number')}
                />
                <Input
                  id="city"
                  label="Cidade"
                  helperText={errors.city?.message}
                  error={!!errors.city?.message}
                  {...register('city')}
                />
              </S.NumberAndCity>
              <Input
                id="complement"
                label="Complemento"
                helperText={errors.complement?.message}
                error={!!errors.complement?.message}
                {...register('complement')}
              />
            </S.Address>

            <Textarea
              id="note"
              label="Alguma observação?"
              helperText="Ex: tirar a cebola, maionese à parte etc."
              {...register('note')}
            />
          </S.DeliveryInformation>

          <S.PaymentMethods>
            <S.Subtitle>Forma de pagamento</S.Subtitle>

            {errors.payment_method?.message && (
              <S.PaymentMethodsError>
                A forma de pagamento é obrigatorio
              </S.PaymentMethodsError>
            )}

            {paymentMethods.map((paymentMethod) => {
              const Icon = paymentMethodConfig[paymentMethod].icon

              return (
                <S.PaymentMethod key={paymentMethod}>
                  <S.PaymentMethodIcon>
                    <Icon />
                  </S.PaymentMethodIcon>
                  <S.PaymentMethodText>
                    {paymentMethodConfig[paymentMethod].value}
                  </S.PaymentMethodText>
                  <Radio
                    value={paymentMethodConfig[paymentMethod].value}
                    {...register('payment_method')}
                  />
                </S.PaymentMethod>
              )
            })}
          </S.PaymentMethods>

          <S.MoneyChange hidden={watch('payment_method') !== 'Dinheiro'}>
            <S.Subtitle>Troco pra quanto?</S.Subtitle>
            <S.MoneyChangeText>
              Seu pedido deu {priceTotal}. Digite quanto vai pagar em dinheiro
              para facilitar o seu troco.
            </S.MoneyChangeText>
            <Input
              id="money_change"
              type="number"
              label="Valor"
              helperText={errors.money_change?.message}
              error={!!errors.money_change?.message}
              {...register('money_change')}
            />
          </S.MoneyChange>

          <S.ReceiptMobileWrapper>
            <Receipt
              total={priceTotal}
              contents={[
                {
                  itens: [
                    ...products,
                    ...(watch('withdrawal')
                      ? []
                      : [
                          {
                            name: 'Taxa mínima de entrega*',
                            value: deliveryPriceFormatted
                          }
                        ])
                  ]
                }
              ]}
            />

            {!watch('withdrawal') && (
              <S.ReceiptMobileInfo>
                * A taxa de entrega pode variar de acordo com a localidade.
              </S.ReceiptMobileInfo>
            )}
          </S.ReceiptMobileWrapper>

          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          <S.SubmitButton type="submit" ref={submitButtonRef as any}>
            Finalizar pedido
          </S.SubmitButton>
        </S.Form>

        <S.ReceiptWrapper>
          <Receipt
            total={priceTotal}
            contents={[
              {
                itens: [
                  ...products,

                  ...(watch('withdrawal')
                    ? []
                    : [
                        {
                          name: 'Taxa mínima de entrega*',
                          value: deliveryPriceFormatted
                        }
                      ])
                ]
              }
            ]}
          />

          {!watch('withdrawal') && (
            <S.ReceiptInfo>
              * A taxa de entrega pode variar de acordo com a localidade.
            </S.ReceiptInfo>
          )}
        </S.ReceiptWrapper>
      </S.Wrapper>
    </>
  )
}
