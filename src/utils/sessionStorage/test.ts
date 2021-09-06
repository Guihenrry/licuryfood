import { getSessionStorage, setSessionStorage } from '.'

describe('getSessionStorage()', () => {
  beforeEach(() => {
    window.sessionStorage.clear()
  })

  it('should return the item from sessionStorage', () => {
    window.sessionStorage.setItem(
      'LICURYFOOD_cartItems',
      JSON.stringify(['1', '2'])
    )

    expect(getSessionStorage('cartItems')).toStrictEqual(['1', '2'])
  })
})

describe('setSessionStorage()', () => {
  beforeEach(() => {
    window.sessionStorage.clear()
  })

  it('should add the item to sessionStorage', () => {
    setSessionStorage('cartItems', ['1', '2'])

    expect(
      JSON.parse(window.sessionStorage.getItem('LICURYFOOD_cartItems')!)
    ).toStrictEqual(['1', '2'])
  })
})
