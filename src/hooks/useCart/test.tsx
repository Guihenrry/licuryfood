import { renderHook, act } from '@testing-library/react-hooks'
import { setSessionStorage } from 'utils/sessionStorage'

import { useCart, CartProvider, CartProviderProps } from '.'

describe('useCart()', () => {
  beforeEach(() => {
    window.sessionStorage.clear()
  })

  it('should load items from session storage', () => {
    const product = {
      id: '1',
      category: 'Pizzaria',
      name: 'Calabresa',
      price: 35,
      quantity: 1
    }

    setSessionStorage('cartItems', { restaurant: [product] })

    const wrapper = ({ children }: CartProviderProps) => (
      <CartProvider>{children}</CartProvider>
    )
    const { result } = renderHook(() => useCart(), { wrapper })

    expect(result.current.items).toStrictEqual({ restaurant: [product] })
  })

  it('should add item in cart', () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <CartProvider>{children}</CartProvider>
    )

    const { result } = renderHook(() => useCart(), { wrapper })

    expect(result.current.items).toStrictEqual({})

    const product = {
      id: '1',
      category: 'Pizzaria',
      name: 'Calabresa',
      price: 35,
      quantity: 1
    }

    act(() => {
      result.current.addToCart('restaurant', product)
    })

    expect(result.current.items).toStrictEqual({ restaurant: [product] })
    expect(window.sessionStorage.getItem('LICURYFOOD_cartItems')).toBe(
      JSON.stringify({ restaurant: [product] })
    )
  })

  it('should increase the quantity if the item is already in the cart', () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <CartProvider>{children}</CartProvider>
    )

    const { result } = renderHook(() => useCart(), { wrapper })

    const product = {
      id: '1',
      category: 'Pizzaria',
      name: 'Calabresa',
      price: 35,
      quantity: 1
    }

    act(() => {
      result.current.addToCart('restaurant', product)
    })

    act(() => {
      result.current.addToCart('restaurant', product)
    })

    expect(result.current.items).toStrictEqual({
      restaurant: [
        {
          ...product,
          quantity: 2
        }
      ]
    })
    expect(window.sessionStorage.getItem('LICURYFOOD_cartItems')).toBe(
      JSON.stringify({
        restaurant: [
          {
            ...product,
            quantity: 2
          }
        ]
      })
    )
  })

  it('should add item in cart with different slugs', () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <CartProvider>{children}</CartProvider>
    )

    const { result } = renderHook(() => useCart(), { wrapper })

    const product = {
      id: '1',
      category: 'Pizzaria',
      name: 'Calabresa',
      price: 35,
      quantity: 1
    }

    act(() => {
      result.current.addToCart('restaurant-1', product)
    })

    act(() => {
      result.current.addToCart('restaurant-2', product)
    })

    expect(result.current.items).toStrictEqual({
      'restaurant-1': [product],
      'restaurant-2': [product]
    })
    expect(window.sessionStorage.getItem('LICURYFOOD_cartItems')).toBe(
      JSON.stringify({
        'restaurant-1': [product],
        'restaurant-2': [product]
      })
    )
  })

  it('should remove item from the cart', () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <CartProvider>{children}</CartProvider>
    )

    const { result } = renderHook(() => useCart(), { wrapper })

    const product = {
      id: '1',
      category: 'Pizzaria',
      name: 'Calabresa',
      price: 35,
      quantity: 1
    }

    act(() => {
      result.current.addToCart('restaurant', product)
    })

    act(() => {
      result.current.addToCart('restaurant', product)
    })

    act(() => {
      result.current.removeFromCart('restaurant', '1')
    })

    expect(result.current.items).toStrictEqual({
      restaurant: [product]
    })
    expect(window.sessionStorage.getItem('LICURYFOOD_cartItems')).toBe(
      JSON.stringify({ restaurant: [product] })
    )

    act(() => {
      result.current.removeFromCart('restaurant', '1')
    })

    expect(result.current.items).toStrictEqual({
      restaurant: []
    })
    expect(window.sessionStorage.getItem('LICURYFOOD_cartItems')).toBe(
      JSON.stringify({ restaurant: [] })
    )
  })

  it('should clear cart by slug', () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <CartProvider>{children}</CartProvider>
    )

    const { result } = renderHook(() => useCart(), { wrapper })

    const product = {
      id: '1',
      category: 'Pizzaria',
      name: 'Calabresa',
      price: 35,
      quantity: 1
    }

    act(() => {
      result.current.addToCart('restaurant-1', product)
    })

    act(() => {
      result.current.addToCart('restaurant-2', product)
    })

    expect(result.current.items).toStrictEqual({
      'restaurant-1': [product],
      'restaurant-2': [product]
    })
    expect(window.sessionStorage.getItem('LICURYFOOD_cartItems')).toBe(
      JSON.stringify({
        'restaurant-1': [product],
        'restaurant-2': [product]
      })
    )

    act(() => {
      result.current.clearCartBySlug('restaurant-2')
    })

    expect(result.current.items).toStrictEqual({
      'restaurant-1': [product],
      'restaurant-2': []
    })
    expect(window.sessionStorage.getItem('LICURYFOOD_cartItems')).toBe(
      JSON.stringify({
        'restaurant-1': [product],
        'restaurant-2': []
      })
    )
  })
})
