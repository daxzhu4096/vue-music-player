<template>
  <footer>
    <footer-item uid="discovery" :info="active" @linkChange="linkChange" route="/">
      <img src="../assets/images/cm2_btm_icn_discovery.png" alt="" slot="active-img">
      <span slot="title">发现音乐</span>
    </footer-item>
    <footer-item uid="music" :info="active" route="/music" @linkChange="linkChange">
      <img src="../assets/images/cm2_btm_icn_music.png" alt="" slot="active-img">
      <span slot="title">我的音乐</span>
    </footer-item>
    <footer-item  uid="firend" :info="active" route="/note" @linkChange="linkChange">
      <img src="../assets/images/cm2_topbar_icn_edit.png" alt="" slot="active-img">
      <span slot="title">写点日记</span>
    </footer-item>
    <footer-item uid="user" :info="active" route="/one" @linkChange="linkChange">
      <img src="../assets/images/cm2_login_icn_mobile@2x.png" alt="" slot="active-img">
      <span slot="title">每日一个</span>
    </footer-item>
  </footer>
</template>

<script>
import FooterItem from './FooterItem'
export default {
  props: ['isShow'],
  components: {FooterItem},
  data () {
    return {
      active: 'discovery'
    }
  },
  methods: {
     linkChange(uid){
       this.active = uid
     }
  }
}
</script>

<style scoped>
footer {
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  background:#34393b;
  color: #fff;
  justify-content: space-around;
  padding: 0 0 4px 0;
}

span {
  font-weight: 100;
}
</style>
