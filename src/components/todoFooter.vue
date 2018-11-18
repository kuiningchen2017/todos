<template>
  <div class="todo-footer">
    <label>
      <!-- 这个全选按钮不用绑定单击响应函数 要记得v-model在各类input中的使用情况 -->
      <input type="checkbox" v-model="isSelect"/>
    </label>
    <span>
      <span>已完成{{done}}</span> / 全部{{todos.length}}
    </span>
    <button class="btn btn-danger" v-show="done > 0" @click="removedAll">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    props: {
      todos: Array,
      selAll: Function,
      removeAll: Function
    },
    methods: {
      removedAll () {
        // 调用主组件app传递过来的删除的方法
        if (confirm(`确认删除已选择的事项吗`)) {
          this.removeAll()
        }
      }
    },
    computed: {
      // 已完成的任务 用计算属性得出
      done () {
        let num = 0
        let {todos} = this
        for (var i = 0; i < todos.length; i++) {
          if (todos[i].done) {
            num++
          }
        }
        return num
      },
      isSelect: {
        get () { // 通过别的值得到的 get是获取
          return this.done === this.todos.length && this.todos.length > 0
        },
        set (value) { // 这个value是true或者是false 只有这俩值 set是监视
          // 然后调用app主组件中的数据todos 修改todos的done属性值 set监视到的新的true或false也设置给todos的done
          this.selAll(value)
        }
      }
    }
  }
</script>

<style>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
