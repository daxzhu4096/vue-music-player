<template>
  <div id="player">
    <header is="Header" :bgStyle="music.picture">
      <img src="../assets/images/cm2_live_btn_back.png" alt="" slot="header-left" @click="ChangePlayerShow">
      <div slot="header-middle" class="header-middle">
        <h2>{{music.title}}</h2>
        <p>{{music.artist}}</p>
      </div>
    </header>
    <div class="share-music">
      <img src="../assets/images/cm2_btm_tab_icn_share.png" alt="">
    </div>
    <article @click="handleHideList">
      <div class="bg-img" :style="{backgroundImage: `url(${music.picture})`}"></div>
      <div class="mask"></div>
      <div class="animate">
        <img src="../assets/images/cm2_play_needle_play@3x.png" alt="" class="item3" :style="{transform: status ? 'rotate(0deg)' : 'rotate(-25deg)'}"/>
        <div class="item1">
          <img src="../assets/images/cm2_play_disc_radio_bg@2x.png" alt="" class="item1-pic">
        </div>
        <div class="item2">
          <img src="../assets/images/cm2_play_disc-ip6@2x.png" alt="" class="item2-pic">
        </div>
        <div class="item4" :style="{transform:transform}">
          <img  :src="music.picture" class="item4-pic" @error="defaultPic">
        </div>
      </div>
      <div class="controls">
        <div class="controls-top">
          <i class="controls-top-bottons" @click="handleClickToChangeCollect">
            <img src="../assets/images/cm2_fm_btn_loved.png" alt="" v-show="collect">
            <img src="../assets/images/cm2_fm_btn_love.png" alt="" v-show="!collect">
          </i>
          <i class="controls-top-bottons">
            <img src="../assets/images/cm2_mv_btn_dld.png" alt="">
          </i>
          <i class="controls-top-bottons">
            <img src="../assets/images/cm2_list_detail_icn_cmt.png" alt="">
          </i>
          <i class="controls-top-bottons">
            <img src="../assets/images/cm2_play_icn_more.png" alt="">
          </i>
        </div>
        <div class="time-line">
          <span>{{ current ||'00:00' }}</span>
          <div class="wrap" @click.self="handleClickToChangeCurrentTime">
            <div class="duration">
              <div class="current" :style="{width: timePast + '%'}">
                <i><i></i></i>
              </div>
            </div>          
          </div>
          <span>{{durationTime ||'00:00'}}</span>
        </div>
        <div class="controls-bottom">
          <i class="controls-bottom-bottons" @click="handleClickToChangeRule">
            <img src="../assets/images/cm2_icn_one@2x.png" alt="" class="item50" v-show="ruleToPlay===0">
            <img src="../assets/images/cm2_icn_shuffle@2x.png" alt="" class="item50" v-show="ruleToPlay===1">
            <img src="../assets/images/cm2_icn_loop@2x.png" alt="" class="item50" v-show="ruleToPlay===2">
          </i>
          <i class="controls-bottom-bottons" @click="handleClickToPlayPev">
            <img src="../assets/images/cm2_vehicle_btn_prev.png" alt="" class="item50">
          </i>
          <i class="controls-bottom-bottons" @click="handleClickToChangeMusicStatus">
            <img src="../assets/images/cm2_fm_btn_pause_prs.png" alt="" v-show="status">
            <img src="../assets/images/cm2_fm_btn_play_prs.png" alt="" v-show="!status">
          </i>
          <i class="controls-bottom-bottons" @click="handleClickToPlayNext">
            <img src="../assets/images/cm2_vehicle_btn_next.png" alt="" class="item50">
          </i>
          <i class="controls-bottom-bottons" @click.stop="handleShowList">
            <img src="../assets/images/cm2_icn_list@2x.png" alt="" class="item50">
          </i>
        </div>
      </div>
    </article>
    <transition name="show-list">
      <music-select-list v-show="showList" @close="handleHideList"></music-select-list>
    </transition>    
    <audio :src="music.url" :autoplay="playerShow" ref="audio" :loop="ruleToPlay===0" @play="startTurnAround" @pause="pauseTurnAround" @timeupdate="currentTimeChange" @canplay="updateDuration" @ended="handleClickToPlayNext"></audio>
  </div>
</template>
<script>
import Header from "../components/Header";
import MusicSelectList from "../components/MusicSelectList";
export default {
  name: "player",
  components: { Header, MusicSelectList },
  data() {
    return {
      audio: null,
      ruleToPlay: 0,
      status: false,
      currentTime: 0,
      duration: 0,
      timePast: 0,
      timer: null,
      transform: null,
      index: 0,
      showList: false
    };
  },
  mounted() {
    this.audio = this.$refs.audio;
  },
  methods: {
    defaultPic(e){
      e.target.src="https://s1.ax1x.com/2018/01/02/pp0h3q.png"
    },
    handleHideList() {
      this.showList = false;
    },
    handleShowList(e) {
      this.showList = !this.showList;
    },
    startTurnAround() {
      clearInterval(this.timer);
      this.timer = setInterval(
        function() {
          this.transform = `rotate(${this.index++ / 15}deg)`;
        }.bind(this),
        10
      );
    },
    pauseTurnAround() {
      clearInterval(this.timer);
    },
    parseTime(time) {
      var n = parseInt(time),
        m,
        s;
      if (n < 600) {
        m = "0" + parseInt(n / 60);
      } else {
        m = "" + parseInt(n / 60);
      }
      if (n % 60 < 10) {
        s = "0" + n % 60;
      } else {
        s = "" + n % 60;
      }
      return m + ":" + s;
    },
    handleClickToChangeCollect() {
      if (!this.collect) {
        this.$store.dispatch("addSong");
      } else {
        this.$store.dispatch("moveOut", this.music.aid);
      }
    },
    handleClickToChangeRule() {
      if (this.ruleToPlay === 2) {
        this.ruleToPlay = 0;
      } else {
        ++this.ruleToPlay;
      }
    },
    handleClickToChangeCurrentTime(e) {
      this.audio.currentTime = e.offsetX / e.target.clientWidth * this.duration;
    },
    handleClickToChangeMusicStatus() {
      this.status = !this.status;
      if (this.status) {
        this.audio.play();
      } else {
        this.audio.pause();
      }
    },
    handleClickToPlayNext() {
      clearInterval(this.timer);
      this.index = 0;
      this.transform = null;
      if (this.ruleToPlay !== 0) {
        if (this.source) {
          this.$store.dispatch("favNext");
        } else {
          this.$store.dispatch("next");
        }
        if (!this.playerShow) {
          this.audio.play();
        }
      }
    },
    handleClickToPlayPev() {
      this.$store.dispatch("pev");
    },
    currentTimeChange() {
      this.currentTime = Math.ceil(this.audio.currentTime);
      this.timePast = this.currentTime * 100 / this.duration;
    },
    updateDuration() {
      this.duration = Math.ceil(this.audio.duration);
      this.status = !this.audio.paused;
    },
    ChangePlayerShow() {
      this.$store.dispatch("changePlayerShow");
    }
  },
  computed: {
    music() {
      return this.$store.state.currentMusic;
    },
    current() {
      return this.parseTime(this.currentTime);
    },
    durationTime() {
      return this.parseTime(this.duration);
    },
    source() {
      return this.$store.state.source;
    },
    playerShow() {
      return this.$store.state.playerShow;
    },
    collect() {
      var flag = false;
      this.$store.state.loveMusic.forEach(item => {
        if (item.aid === this.music.aid) {
          flag = true;
        }
      });
      return flag;
    }
  }
};
</script>
<style scoped>
.show-list-enter-active {
  transition: all 0.3s ease;
}
.show-list-leave-active {
  transition: all 0.3 ease;
}
.show-list-enter,
.show-list-leave-to {
  transform: translateY(350px);
  opacity: 0;
}
#player {
  width: 100%;
  position: relative;
}
article {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
}
.bg-img {
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  -webkit-filter: blur(90px);
  filter: blur(50px);
  opacity: 0.7;
}
.mask {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(37, 19, 12, 0.52);
}
.animate {
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 200px;
  border-top: 1px solid #a99494;
}
.item1 {
  position: absolute;
  width: 330px;
  height: 330px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.item2 {
  position: absolute;
  width: 330px;
  height: 330px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.share-music{
      z-index: 99;
    position: absolute;
    right: 0;
    top: 0;
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.item3 {
  position: absolute;
  height: 39%;
  top: -6.5%;
  left: 50%;
  margin-left: -7%;
  z-index: 8;
  transform-origin: 25.263158% 16.326531%;
  transition: transform 1s;
}
.item4 {
  position: absolute;
  width: 214px;
  height: 214px;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  overflow: hidden;
  margin-top: -107px;
  margin-left: -107px;
}
.item1-pic {
  width: 100%;
}
.item2-pic {
  width: 100%;
  /* margin-top: 5px; */
}
.item4-pic {
  width: 100%;
}
.controls {
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: #fff;
}

.controls > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.controls-top {
  width: 70%;
}

.controls .time-line {
  width: 100%;
}

.time-line span {
  width: 14%;
  font-size: 10px;
  font-weight: 100;
  text-align: center;
}

.wrap {
  height: 10px;
  width: 74%;
}
.wrap .duration {
  margin-top: 4px;
  width: 100%;
  height: 2px;
  background: #bdb9b9;
}

.current {
  background: #000;
  height: 100%;
}

.current > i {
  display: block;
  float: right;
  height: 10px;
  width: 10px;
  background: #fff;
  margin-top: -4px;
  border-radius: 5px;
  margin-right: -5px;
}

.current > i i {
  display: block;
  height: 2px;
  width: 2px;
  background: #000;
  margin: 4px;
  border-radius: 1px;
}

.controls-bottom {
  width: 90%;
}

.controls-bottom .item50 {
  width: 50px;
}
.header-middle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
