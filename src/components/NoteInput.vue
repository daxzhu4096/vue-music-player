<template>
  <div>
    <textarea name="" id="" cols="30" rows="10" v-model="content"></textarea>
    <div class="btn-wrap">
      <div class="add">
        <button @click="handleClickToAddNote">添加</button>
      </div>
      <div class="esc">
        <button @click="handleClickOnCancel">取消</button>
      </div>      
    </div>
    
  </div>
</template>
<script>
export default {
  name: "noteinput",
  data() {
    return {
      content: ""
    };
  },
  methods: {
    handleClickToAddNote() {
      this.$emit('turnOff')
      if (this.content) {
        let current = new Date();
        this.$store.dispatch("addNote", {
          year: current.getFullYear(),
          month: current.getMonth() + 1,
          content: this.content,
          date: current.getDate()
        });
      }
    },
    handleClickOnCancel(){
      this.content = ''
      this.$emit('turnOff')
    }
  }
};
</script>
<style scoped>
textarea {
  width: 100%;
  border: 1px solid #bbb;
  outline: none;
  border-radius: 4px;
  background: inherit;
}
.btn-wrap {
  display: flex;
  justify-content: flex-end;
  height: 30px;
  align-items: center;
}
.btn-wrap div {
  height: 100%;
}
.btn-wrap button {
  height: 100%;
  width: 56px;
  border: 1px solid #aaa;
  border-radius: 4px;
  background: #fff;
  margin-left: 20px;
  outline: none;
}
</style>
