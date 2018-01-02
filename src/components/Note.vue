<template>
  <div class="note">
    <div class="time">
      <h3>{{note.date}}</h3>
    </div>
    <div class="wrap">
      <div class="note-content" v-for="(item,index) in note.notes" :key="index">
        <p>{{item}}</p>
      </div>
    </div>    
  </div>
</template>
<script>
export default {
  props: ["note"]
};
</script>
<style scoped>
.note {
  position: relative;
}
.time {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 46px;
}
h3 {
  margin: 0;
  text-align: right;
  font-family: Serif;
  margin-right: 4px;
}
.wrap {
  position: absolute;
  top: 0;
  right: 0;
  left: 60px;
}
p {
  margin-top: 0;
  padding: 10px 4px 10px 4px;
  font-weight: 200;
  margin-bottom: 20px;
  font-size: 14px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 1px 1px 5px #bcbcbc;
}
.note-content {
  margin-right: 40px;
}
</style>
