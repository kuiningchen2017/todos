<template>
  <li @mouseenter="enter" @mouseleave="leave" @click="isSelect" :style="{backgroundColor: color}">
    <label>
      <input type="checkbox" v-model="todo.done"/>
      <span>{{todo.name}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click.stop="deletetodo(index)">删除</button>
  </li>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      todo: Object,
      removeTodo: Function,
      index: Number
    },
    data () {
      return {
        isShow: false,
        color: 'white'
      }
    },
    methods: {
      enter () {
        this.isShow = true
        this.color = 'gray'
      },
      leave () {
        this.isShow = false
        this.color = 'white'
      },
      isSelect () {
        // 点击修改todo的状态
        this.todo.done = !this.todo.done
      },
      deletetodo (index) {
        let {todo} = this
        if (confirm(`确删除${todo.name}的待做事项吗`)) {
          this.removeTodo(index)
        }
      }
    }
  }
</script>

<style>
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
