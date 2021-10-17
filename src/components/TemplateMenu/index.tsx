import Link from 'next/link'
import { useMemo } from 'react'

import { Restaurant, Product } from 'data/types'
import { RestaurantInfo } from 'components/RestaurantInfo'
import { ProductCard } from 'components/ProductCard'
import { ShoppingCart } from 'components/Icons'
import { useCart } from 'hooks/useCart'
import { formatPrice } from 'utils/formatPrice'

export type TemplateMenuProps = Omit<Restaurant, 'paymentMethods' | 'phone'>

import * as S from './styles'

export const TemplateMenu = ({
  slug,
  backgroundImage,
  image,
  name,
  category,
  deliveryPrice,
  menu
}: TemplateMenuProps) => {
  const { items, addToCart, removeFromCart } = useCart()
  const cart = useMemo(() => (items[slug] ? items[slug] : []), [items, slug])

  const quantityTotal = cart.reduce((accumulator, product) => {
    return accumulator + product.quantity
  }, 0)
  const priceTotal = formatPrice(
    cart.reduce((accumulator, product) => {
      return product.quantity * product.price + accumulator
    }, 0) + deliveryPrice
  )

  const getProductQuantityById = (id: string) => {
    const product = cart.find((product) => product.id === id)
    return product ? product.quantity : 0
  }

  const handlePlus = (product: Product, category: string) => {
    addToCart(slug, {
      ...product,
      category: category,
      quantity: 1
    })
  }

  const handleLess = (id: string) => {
    removeFromCart(slug, id)
  }

  return (
    <>
      <RestaurantInfo
        backgroundImage={backgroundImage}
        image={image}
        name={name}
        category={category}
        deliveryPrice={deliveryPrice}
      />

      {menu.map((menuCategory) => (
        <S.Category key={menuCategory.categoryTitle}>
          <S.CategoryTitle>{menuCategory.categoryTitle}</S.CategoryTitle>

          <S.ProductList>
            {menuCategory.items.map((product) => (
              <S.ProductItem key={product.id}>
                <ProductCard
                  image={product.image}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  quantity={getProductQuantityById(product.id)}
                  onPlus={() => handlePlus(product, menuCategory.categoryTitle)}
                  onLess={() => handleLess(product.id)}
                />
              </S.ProductItem>
            ))}
          </S.ProductList>
        </S.Category>
      ))}

      <Link href={`/finalizar-pedido/${slug}`} passHref>
        <S.CheckoutLink disabled={cart.length < 1}>
          <S.CheckoutButtonContainer>
            <S.CheckoutButtonIcon>
              <ShoppingCart />
              <S.CheckoutButtonQuantity>
                {quantityTotal}
              </S.CheckoutButtonQuantity>
            </S.CheckoutButtonIcon>

            <S.CheckoutButtonText>Finalizar pedido</S.CheckoutButtonText>
            <S.CheckoutButtonPrice>{priceTotal}</S.CheckoutButtonPrice>
          </S.CheckoutButtonContainer>
        </S.CheckoutLink>
      </Link>
    </>
  )
}
