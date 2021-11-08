import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { getLocalStorage } from 'utils/localStorage'
import { Button } from 'components/Button'
import { Receipt } from 'components/Receipt'

import * as S from './styles'

type Product = {
  name: string
  value: string
}

type Order = {
  name: string
  withdrawal: boolean
  address: string
  number: string
  city: string
  complement: string
  note: string
  payment_method: string
  money_change: string
  priceTotal: string
  deliveryPriceFormatted: string
  products: Product[]
}

export const TemplateSuccess = () => {
  const router = useRouter()
  const [lastOrder, setLastOrder] = useState<Order>()

  useEffect(() => {
    const lastOrderLocalStorage = getLocalStorage('lastOrder')

    if (lastOrderLocalStorage) {
      setLastOrder(lastOrderLocalStorage)
    } else {
      router.push('/')
    }
  }, [router])

  return (
    <S.Wrapper>
      <S.Icon />
      <S.Title>Pedido enviado com sucesso</S.Title>

      <S.Actions>
        <Link href="/" passHref>
          <Button as="a" fullWidth>
            Voltar para o inicio
          </Button>
        </Link>
      </S.Actions>

      {lastOrder && (
        <Receipt
          total={lastOrder.priceTotal}
          contents={[
            {
              title: 'Informações da entrega',
              itens: lastOrder.withdrawal
                ? [{ name: 'Nome', value: lastOrder.name }]
                : [
                    { name: 'Nome', value: lastOrder.name },
                    { name: 'Endereço', value: lastOrder.address },
                    { name: 'Número', value: lastOrder.number },
                    { name: 'Cidade', value: lastOrder.city },
                    { name: 'Complemento', value: lastOrder.complement }
                  ]
            },
            {
              title: 'Informações do pagamento',
              itens: [
                { name: 'Forma de pagamento', value: lastOrder.payment_method },
                ...(lastOrder.payment_method === 'Dinheiro'
                  ? [{ name: 'Troco para', value: 'R$ 100,00' }]
                  : [])
              ]
            },
            {
              title: 'Informações do pedido',
              itens: [
                ...lastOrder.products,
                ...(lastOrder.withdrawal
                  ? []
                  : [
                      {
                        name: 'Taxa de entrega',
                        value: lastOrder.deliveryPriceFormatted
                      }
                    ])
              ]
            }
          ]}
        />
      )}
    </S.Wrapper>
  )
}
