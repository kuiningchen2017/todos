<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认"
           @keyup.enter="addTodo" v-model="add"/>
    <p>{{add}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      addtodo: Function
    },
    data () {
      return {
        add: ''
      }
    },
    methods: {
      addTodo () {
        // 检查用户输入的是否为无效内容
        if (!this.add.trim()) {
          alert('请正常输入')
          return
        }
        // 获取用户输入的内容 封装成对象
        let todo = {
          name: this.add,
          done: false
        }
        // 调用主组件app传递过来的addtodo方法
        this.addtodo(todo)
        // 清除用户输入的内容
        this.add = ''
      }
    }
  }
</script>

<style>
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>
