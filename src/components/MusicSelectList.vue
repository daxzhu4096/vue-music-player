<template>
  <div class="container">
    <header>
      <div class="header-btn-wrap">
        <span :class="{active: !show}" @click="showHistory">历史播放</span>
        <span :class="{active: show}" @click="showEnjoy">我的收藏</span>
      </div>
    </header>
    <div class="list">
      <div class="enjoy list-item" v-if="show">
        <music-select-item v-for="(item,index) in enjoy" :music="item" :key="index" @playThisMusic="playThisMusicEnjoy(index)"></music-select-item>
      </div>
      <div class="history list-item" v-else>
        <music-select-item v-for="(item,index) in history" :music="item" :key="index" @playThisMusic="playThisMusicHistory(index)"></music-select-item>
      </div>
    </div>
    <footer @click="hideList">关闭</footer>
  </div>
</template>
<script>
import MusicSelectItem from "./MusicSelectItem";
export default {
  components: { MusicSelectItem },
  data() {
    return {
      show: false
    };
  },
  methods: {
    showHistory() {
      this.show = false;
    },
    showEnjoy() {
      this.show = true;
    },
    hideList(){
      this.$emit('close')
    },
    playThisMusicEnjoy(index){
      this.$store.dispatch("assignPlay", index);
      this.hideList()
    },
    playThisMusicHistory(index){
      this.$store.dispatch("chooseMusic", index);
      this.hideList()
    }
  },
  computed: {
    enjoy() {
      return this.$store.state.loveMusic;
    },
    history() {
      return this.$store.state.historyMusic;
    }
  }
};
</script>
<style scoped>
.container {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
}
.container header {
  height: 42px;
  border-bottom: 1px solid #eae2e2;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container footer {
  height: 50px;
  border: 1px solid #eae2e2;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container .list {
  max-height: 408px;
  overflow: scroll;
}
header .header-btn-wrap span {
  padding: 4px 6px;
}
.active {
  color: #fff;
  background: #f00;
  border-radius: 4px;
}
.list-item>div:last-child{
  border-bottom: none;
}
</style>
