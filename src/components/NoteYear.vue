<template>
  <div class="note-year">
    <div class="year">
      <h1>{{noteyear.year}}</h1>
    </div>
    <note-month v-for="(item,index) in noteyear.list" :key="index" :notemonth="item"></note-month>
  </div>
</template>
<script>
import NoteMonth from "./NoteMonth";
export default {
  props: ["noteyear"],
  components: { NoteMonth }
};
</script>
<style scoped>
h1 {
  text-align: center;
  color: #f93131;
  font-size: 30px;
  margin: 5px;
  font-family: Serif;
}
</style>
