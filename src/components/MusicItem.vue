<template>
  <div class="wrap">
    <div class="title" @click="handleClickOnTitle">
      <div class="title-wrap">
        <slot name="icon"></slot>
        <h1 class="header">{{musictitle}}</h1>
      </div>      
    </div>
    <div class="items" v-show="isShow">
      <div class="item" v-for="(music,index) in musiclist" :key="index" @click="playThisMusic(music,index)">
        <div class="music-info">
          <h2>{{music.title}}</h2>
          <p>by {{music.artist}}</p>
        </div>
        <div class="delete-item" @click="handleDelItem()">
          <img src="../assets/images/cm2_act_cover_del@2x.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["musiclist", "musictitle"],
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    handleClickOnTitle() {
      this.isShow = !this.isShow;
    },
    playThisMusic(music, index) {
      if (this.musictitle === "我的收藏") {
        this.$store.dispatch("assignPlay", index);
      } else {
        this.$store.dispatch("chooseMusic", index);
      }
      this.$store.dispatch("changePlayerShow");
    },
    handleDelItem(index){
      if (this.musictitle === "我的收藏") {
        this.$store.dispatch("DelFevItem", index);
      } else {
        this.$store.dispatch("delHistoryItem", index);
      }
    }
  }
};
</script>

<style scoped>
.wrap {
  margin-top: 10px;
}
.item {
  height: 45px;
  position: relative;
  margin-bottom: 3px;
}
.item .cover {
  height: 100%;
  width: 45px;
  position: absolute;
  left: 0;
  top: 0;
}
.item .music-info {
  top: 0;
  left: 55px;
  right: 0;
  bottom: 0;
  position: absolute;
  padding-right: 55px;
  border-bottom: 1px solid #e4e0e0;
}
h2 {
  margin: 0;
  font-size: 17px;
  font-weight: normal;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
p {
  margin: 0;
  font-size: 12px;
  padding-bottom: 6px;
}
h1 {
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  left: 55px;
  top: 0;
  height: 50px;
  line-height: 50px;
  margin: 0;
}
.title {
  height: 50px;
  position: relative;
}
.title img {
  position: absolute;
  margin: 10px;
  left: 0;
  top: 0;
}
.title-wrap {
  border-bottom: 1px solid #ded8d8;
  margin-left: 54px;
  height: 50px;
}
.items {
  margin-top: 3px;
}
.delete-item {
  position: absolute;
  top: 0;
  right: 0;
  height: 45px;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
}
.delete-item img{
  height: 11px;
}
</style>
