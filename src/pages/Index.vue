<template>
  <div>
    <header is="Header" :bg="'#34393b'">
      <img src="../assets/images/cm2_topbar_icn_mic.png" alt="" slot="header-left">
      <input type="text" name="" id="" slot="header-middle" class="input" >
    </header>
    <keep-alive>
      <article>
        <section v-for="(item,index) in channels" :key="index" :channel="item" is="Channel"></section>
        <loadding v-show="!Array.isArray(channels)"></loadding>
      </article>
    </keep-alive>
  </div>  
</template>
<script>
import Channel from "../components/Channel";
import Loadding from "../components/Loadding";
import Header from "../components/Header";
export default {
  name: "index",
  components: { Channel, Loadding, Header },
  data() {
    return {
    }
  },
  computed: {
channels(){
  return this.$store.state.channels
}
  },
  methods: {
    handleClickToChangeRoute(){
      console.log
    }
  }
};
</script>
<style scoped>
article {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  position: absolute;
  top: 60px;
  bottom: 50px;
  left: 0;
  overflow: auto;
  right: 0;
}
article::-webkit-scrollbar{
  background: transparent;
}
.input {
  width: 290px;
  border: none;
  height: 24px;
  font-size: 16px;
  border-radius: 4px;
  outline: none;
  background: url(../assets/images/search.png) center center no-repeat;
  background-size: auto 16px;
  background-color: #fff;
}
.input:focus {
  outline: none;
  background: #fff;
}
</style>
