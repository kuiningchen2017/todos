export default {
    setStorage (key, data) {
      if (!data) return
      let result = JSON.stringify(data)
      window.localStorage.setItem(key, result)
    },
    getStorage (key) {
      const storageData = window.localStorage.getItem(key)
      if (!storageData) return undefined
      return JSON.parse(storageData)
    },
    removeStorage (key) {
      window.localStorage.removeItem(key)
    }
}
