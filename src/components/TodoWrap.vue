<template>
  <div>
    <todo-input @addTodo="addTodo"></todo-input>
    <todo-list :todos="filteredTodos" v-if="todos.length"></todo-list>
    <div class="tips" v-if="!todos.length">
      您还没有添加任务,先添加一个吧...
    </div>
    <div class="todos-controls" v-if="todos.length">
      <span @click="visibility='all'" :class="{choose: visibility==='all'}">全部</span>
      <span @click="visibility='completed'" :class="{choose: visibility==='completed'}">已完成</span>
      <span @click="visibility='active'" :class="{choose: visibility==='active'}">进行中</span>
    </div>
  </div>
</template>
<script>
import TodoInput from './TodoInput'
import TodoList from './TodoList'
const filters = {
  all: todos => todos,
  active: todos => todos.filter(todo => !todo.done),
  completed: todos => todos.filter(todo => todo.done)
}
export default {
  components: {TodoInput,TodoList},
  data(){
    return {
      visibility: 'all',
      filters: filters
    }
  },
  methods: {
    addTodo(text){
      this.$store.dispatch({
        text,
        done: false
      })
    }
  },
  computed: {
    todos() {
      return this.$store.state.todos
    },
    filteredTodos(){
      return filters[this.visibility](this.todos)
    }
  }
}
</script>
<style scoped>
.tips{
  padding-top: 110px;
  text-align: center;
}
.todos-controls{
      display: flex;
    justify-content: space-around;
    padding-top: 30px;
}
.todos-controls span{
  width: 20%;
  text-align: center;
  height: 30px;
  line-height: 30px;
  border-radius: 6px;
}
.todos-controls span.choose{
  background: #60b6d8;
  color: #fff;
  font-weight: 100;
}
</style>
