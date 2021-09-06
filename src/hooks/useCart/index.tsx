import { createContext, useState, useContext, useEffect } from 'react'
import { getSessionStorage, setSessionStorage } from 'utils/sessionStorage'

type CartProduct = {
  id: string
  name: string
  category: string
  quantity: number
  price: number
}

type CartItems = {
  [key: string]: CartProduct[]
}

type CartContextType = {
  items: CartItems
  addToCart: (slug: string, product: CartProduct) => void
  removeFromCart: (slug: string, id: string) => void
  clearCartBySlug: (slug: string) => void
}

const cartContextDefaultValues: CartContextType = {
  items: {},
  addToCart: () => null,
  removeFromCart: () => null,
  clearCartBySlug: () => null
}

export const CartContext = createContext<CartContextType>(
  cartContextDefaultValues
)

export type CartProviderProps = { children: React.ReactNode }

export const CartProvider = ({ children }: CartProviderProps) => {
  const [items, setItems] = useState<CartItems>({})

  useEffect(() => {
    const sessionStorageItems = getSessionStorage('cartItems')

    if (sessionStorageItems) {
      setItems(sessionStorageItems)
    }
  }, [])

  const saveItems = (cartItems: CartItems) => {
    setItems(cartItems)
    setSessionStorage('cartItems', cartItems)
  }

  const addToCart = (slug: string, product: CartProduct) => {
    const slugItems = items[slug]

    if (!slugItems) {
      saveItems({ ...items, [slug]: [product] })

      return
    }

    const productAlreadyAdded = slugItems.some((item) => item.id === product.id)

    if (productAlreadyAdded) {
      saveItems({
        ...items,
        [slug]: slugItems.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + product.quantity
            }
          }

          return item
        })
      })
    } else {
      saveItems({
        ...items,
        [slug]: [...slugItems, product]
      })
    }
  }

  const removeFromCart = (slug: string, id: string) => {
    const slugItems = items[slug]
    const product = slugItems.find((item) => item.id === id)

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (product!.quantity > 1) {
      saveItems({
        ...items,
        [slug]: slugItems.map((item) => ({
          ...item,
          quantity: item.quantity - 1
        }))
      })
    } else {
      saveItems({
        ...items,
        [slug]: slugItems.filter((item) => item.id !== id)
      })
    }
  }

  const clearCartBySlug = (slug: string) => {
    saveItems({
      ...items,
      [slug]: []
    })
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        clearCartBySlug
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
