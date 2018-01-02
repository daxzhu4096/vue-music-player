<template>
  <li>
    <div class="todo-item" :class="{completed: todo.done}" @click="handleClickOnTodoItem">
      {{todo.text}}
    </div>
    <i @click="handleClickOnDelete"><img src="../assets/images/cm4_list_btn_icn_add@2x.png" alt=""></i>
  </li>
</template>
<script>
export default {
  props: ["todo"],
  methods: {
    handleClickOnTodoItem() {
      this.$emit("changeStatus");
    },
    handleClickOnDelete() {
      this.$emit("delete");
    }
  }
};
</script>
<style scoped>
.todo-item {
  padding: 10px;
}
div {
  font-size: 18px;
}
li {
  position: relative;
  border-bottom: 1px solid #b7b4b4;
}
.completed {
  text-decoration: line-through;
}
i {
  position: absolute;
  right: -6px;
  top: 0;
  height: 45px;
  
}
img {
  height: 60%;
  margin-top: 10px;
  transform: rotate(45deg);
}
</style>
