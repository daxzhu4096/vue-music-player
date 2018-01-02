<template>
  <div>
    <header is="Header">
      <i slot="header-left" style="width: 28px"></i>
      <h1 slot="header-middle" class="header-middle">一个图文</h1>
    </header>
    <article v-if="one"> 
      <div class="wrap">
        <img :src="one.img_url" alt="">
        <p class="pic-author"><span>{{one.vol}}</span><span>{{one.img_author}} | {{one.img_kind}}</span></p>
        <p class="date">{{time.getDate()}}</p>
        <p class="month">{{time.getFullYear()}}.{{time.getMonth()+1}}</p>
        <div class="line"></div>
        <p class="content">{{one.word}}</p>
      </div>
    </article>
    <loadding v-else></loadding>
  </div>
</template>
<script>
import Header from "../components/Header";
import Loadding from "../components/Loadding";
export default {
  components: { Header, Loadding },
  data() {
    return {
      time: null
    };
  },
  created(){
    this.time = new Date()
  },
  computed: {
    one(){
      return this.$store.state.one
    }
  }
};
</script>
<style scoped>
.header-middle {
  font-size: 18px;
  font-weight: normal;
  text-align: center;
}
.wrap img {
  width: 100%;
  padding: 0;
  margin-top: 50px;
}
p {
  margin: 0;
  padding: 0 20px;
}
.pic-author {
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
}
.pic-author span {
  font-family: "PingFangSC-Light", sans-serif;
  font-size: 13px;
}
.date {
  font-size: 48px;
  font-family: serif;
  text-align: center;
  margin-top: -25px;
}
.month {
  font-size: 14px;
  font-family: "PingFangSC-Light", sans-serif;
  text-align: center;
  margin-top: -10px;
  margin-bottom: 5px;
}
.line {
  height: 1px;
  background: #aaa;
  width: 50%;
  margin: 0 auto;
}
.content {
  margin-top: 10px;
  font-size: 16px;
  font-family: "PingFangSC-Light", sans-serif;
}
</style>
