<template>
  <div>
    <header is="Header" :bg="'#34393b'">
      <h2 slot="header-left" class="more" @click="showAside">更多</h2>
      <h2 slot="header-middle">我的音乐</h2>
    </header>
    <article>
      <music-item :musiclist="loveMusic" musictitle="我的收藏">
        <img src="../assets/images/cm4_my_icn_fav.png"  alt="" slot="icon">
      </music-item>
      <music-item musictitle="最近播放" :musiclist="historyMusic">
        <img src="../assets/images/cm4_radio_icn_music.png" alt=""  slot="icon">
      </music-item>
    </article> 
  </div> 
</template>
<script>
import MusicItem from "../components/MusicItem";
import Header from "../components/Header";

export default {
  components: { MusicItem, Header },
  computed: {
    historyMusic() {
      return this.$store.state.historyMusic;
    },
    loveMusic() {
      return this.$store.state.loveMusic;
    }
  },
  data(){
    return {
      show: false
    }
  },
  methods: {
    showAside(){
      this.show = true;
    }
  }
};
</script>
<style scoped>
article {
  background: #fff;
  position: absolute;
  top: 50px;
  right: 0;
  bottom: 54px;
  left: 0;
  overflow: auto;
}
article::-webkit-scrollbar {
    background: transparent;
}
.more {
  font-size: 14px;
  font-weight: 100;
}
</style>
