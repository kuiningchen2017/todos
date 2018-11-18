<template>
  <ul class="todo-main">
    <todo-item v-for="(todo, index) in todos" :todo="todo" :key="index"
               :remove-todo="removeTodo" :index="index"></todo-item>
  </ul>
</template>

<script type="text/ecmascript-6">
  import todoItem from './todoItem'
  export default {
    // 接受app主组件传递过来的数据
    props: {
      todos: Array,
      removeTodo: Function
    },
    components: {
      todoItem
    }
  }
</script>

<style>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
