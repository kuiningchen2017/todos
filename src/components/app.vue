<template>
  <!--app是主组件 所有的数据放在这里-->
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header :addtodo="addtodo"></todo-header>
      <todo-main :todos="todos" :remove-todo="removeTodo"></todo-main>
      <!-- 完成的任务数量和总任务数量如何传递？ -->
      <todo-footer :todos="todos" :sel-all="selAll" :remove-all="removeAll"></todo-footer>
    </div>
  </div>
</template>

<script>
  import todoHeader from './todoHeader.vue'
  import todoMain from './todoMain.vue'
  import todoFooter from './todoFooter.vue'
  import storageUtil from '../util/storageUtil'

  export default {
    data () {
      return {
        // 初始化数据
        todos: []
      }
    },
    created () { // vue的生命周期函数
      // 存储在本地
      this.todos = storageUtil.getStorage()
    },
    methods: {
      addtodo (todo) {
        this.todos.unshift(todo)
      },
      removeTodo (index) {
        this.todos.splice(index, 1)
      },
      selAll (value) {
        let {todos} = this
        todos.map((item) => {
          item.done = value
        })
      },
      removeAll () {
        let {todos} = this
        for (var i = 0; i < todos.length; i++) {
          if (todos[i].done) {
            todos.splice(i, 1)
            i--
          }
        }
      }
    },
    components: {
      todoHeader,
      todoMain,
      todoFooter
    },
    watch: {
      todos: {
        deep: true,
        handler: (val) => {
          storageUtil.setStorage(val)
        }
      }
    }
  }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }

  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
