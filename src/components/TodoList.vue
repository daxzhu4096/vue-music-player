<template>
  <ul>
    <todo v-for="(item,index) in todos" :key="index" :todo="item" @changeStatus="changeStatus(index)" @delete="deleteItem(index)"></todo>
  </ul>
</template>
<script>
import Todo from './Todo'
export default{
  props: ['todos'],
  components: {Todo},
  methods: {
    changeStatus(index){
      this.$store.dispatch('toggleTodoStatus',index)
    },
    deleteItem(index){
      this.$store.dispatch('deleteTodoItem',index)
    }
  }
}
</script>
<style scoped>
ul{
  padding-right: 40px;
  transition: height 3s;
}
</style>
