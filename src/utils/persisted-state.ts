export const persistState = (storageKey: string, state: object): void => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(storageKey, JSON.stringify(state))
  }
}

export const getIntialState = (storageKey: string): any => {
  if (typeof window !== 'undefined') {
    const savedState = window.localStorage.getItem(storageKey)
    try {
      if (!savedState) {
        return undefined
      }
      return JSON.parse(savedState ?? '{}')
    } catch (e) {
      console.error('Error loading state : ' + storageKey)
      return undefined
    }
  }
}
