<template>
  <div class="note-month">
    <div class="month">
      <h2>{{notemonth.month}}月</h2>
    </div>
    <note v-for="(item,index) in notemonth.list" :key="index" :note="item"></note>
  </div>
</template>
<script>
  import Note from './Note'
  export default {
    props: ['notemonth'],
    components: {Note}
  }
</script>
<style scoped>
h2{
  margin: 4px 2px;
  color: #207bf7;
  font-family: Serif;
}
</style>
