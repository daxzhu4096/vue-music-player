<template>
  <div>
    <input v-model="text">
    <button @click.prevent="add">Add</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: ""
    };
  },
  methods: {
    add() {
      if(this.text.trim())
      this.$store.dispatch("addTodo", { text: this.text.trim(), done: false });
      this.text = ''
    }
  }
};
</script>
<style scoped>
div{
  display: flex;
  justify-content: space-around;
}
input {
  width: 76%;
  border: 1px solid #d9e0e2;
  height: 24px;
  border-radius: 12px;
  outline: none;
  padding-left: 10px;
}
input:focus{
  outline: none;
}
button{
  background: #f33f3f;;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-weight: 100;
  width: 14%;
  outline:none;
}
</style>
