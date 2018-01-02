<template>
  <div class="item" @click="playThisMusic">
    <p>{{music.title?music.title:''}}</p>
    <i v-if="isPlaying" class="playing">
      <img src="../assets/images/cm2_vol_btn_speaker@2x.png" alt="">
    </i>
    <!-- <i v-else><img src="../assets/images/cm2_act_cover_del@2x.png" alt=""></i> -->
    
  </div>
</template>
<script>
export default {
  props: ['music'],
  computed: {
    isPlaying(){
      return this.music.aid === this.$store.state.currentMusic.aid
    }
  },
  methods: {
    playThisMusic() {
      this.$emit('playThisMusic')
    }
  }
}
</script>
<style scoped>
.item{
  margin: 0;
  margin-left: 16px;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 42px;
  border-bottom: 1px solid #eae2e2;
  padding-right: 20px;
}
.item p{
  padding: 0;
  margin: 0;
  margin-right: 40px;
  font-size: 15px;
}
.item i{
  opacity: .4;
}
.item i img{
  width: 12px;
}
.item .playing{
  opacity: 1;
  width: 30px;
  height: 30px;
  margin-right: -5px;
}
.item .playing img{
  width: 30px;
}
</style>
