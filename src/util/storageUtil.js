// var STORAGE_KEY = 'todos'
// export default {
//   fetch () {
//     return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
//   },
//   save (todos) {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
//   }
// }
// 数据存储的工具模块
// 然后暴露出去本地存储和本地读取数据的两种方法
let STORAGE_KEY = 'todos'
export default { // 默认暴露
  setStorage (data) { // 存储成json数据格式
    let result = JSON.stringify(data)
    localStorage.setItem(STORAGE_KEY, result)
  },
  getStorage () { // 读取在本地存储的数据
    let data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    return data
  }

}
