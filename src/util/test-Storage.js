function setStorage (key, data) {
  // 要考虑两个事情 一个data是否为空 一个要转化为json数据格式
  if (!data) return
  const storageData = JSON.stringify(data)
  window.localStorage.setItem(key, storageData)
}
function getStorage (key) {
  const storageData = window.localStorage.getItem(key)
  if (!storageData) return undefined
  return JSON.parse(storageData)
}
function removeStorage (key) {
  window.localStorage.removeItem(key)
}

function createStorage (key) {
  const obj = {
    setData (data) {
      setStorage(key, data)
    },
    getData () {
      return getStorage(key)
    },
    removeData () {
      removeStorage(key)
    }
  }
  return obj
}
export default {
  loginInfo: createStorage('loginInfo')
}
