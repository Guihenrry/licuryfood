const APP_KEY = 'LICURYFOOD'

export function getLocalStorage(key: string) {
  if (typeof window === 'undefined') return

  const data = window.localStorage.getItem(`${APP_KEY}_${key}`)
  return JSON.parse(data!)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function setLocalStorage(key: string, value: any) {
  if (typeof window === 'undefined') return

  const data = JSON.stringify(value)
  window.localStorage.setItem(`${APP_KEY}_${key}`, data)
}
