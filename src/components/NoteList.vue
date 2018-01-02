<template>
  <div>
    <note-year v-for="(item,index) in notes" :key="index" :noteyear="item"></note-year>
  </div>
</template>
<script>
  import NoteYear from './NoteYear'
  export default {
    components: {NoteYear},
    name: 'notelist',
    computed: {
      notes(){
        return this.$store.state.notes
      }
    }
  }
</script>