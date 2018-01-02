<template>
  <div>
    <div class="add-new-note" @click="handleClickToNew" v-show="!show">
      <img src="../assets/images/cm2_runfm_icn_add@2x.png" width=30 alt="">
    </div>
    <note-input v-show="show" @turnOff="turnOff"></note-input>
    <note-list></note-list>
    <div class="tips" v-show="!show&&!this.$store.state.notes.length">
      <p>您还没有添加任务,先添加一个吧...</p>
      <img src="../assets/images/cm2_act_addmusic_night_prs.png" alt="" @click="handleClickToNew">
    </div>
  </div>
</template>
<script>
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";
export default {
  components: { NoteList, NoteInput },
  name: "notewrap",
  data() {
    return {
      show: false
    };
  },
  methods: {
    turnOff() {
      this.show = false;
    },
    handleClickToNew() {
      this.show = true;
    }
  }
};
</script>
<style scoped>
.tips {
  padding-top: 110px;
  text-align: center;
}
.add-new-note {
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 11;
}
</style>
