const APP_KEY = 'LICURYFOOD'

export function getSessionStorage(key: string) {
  if (typeof window === 'undefined') return

  const data = window.sessionStorage.getItem(`${APP_KEY}_${key}`)
  return JSON.parse(data!)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function setSessionStorage(key: string, value: any) {
  if (typeof window === 'undefined') return

  const data = JSON.stringify(value)
  window.sessionStorage.setItem(`${APP_KEY}_${key}`, data)
}
