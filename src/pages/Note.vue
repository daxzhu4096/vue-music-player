<template>
  <div>
    <header is="Header" :bg="'#34393b'">
      <i slot="header-left" style="width: 28px"></i>
      <div slot="header-middle" class="header-middle-wrap">
        <span :class="{show: show}" @click="show=true">日记</span><span :class="{show: !show}" @click="show=false">清单</span>
      </div>
    </header>
    <div class="mask"></div>
    <article>
      <note-wrap v-show="show"></note-wrap>
      <todo-wrap v-show="!show"></todo-wrap>
    </article>
  </div> 
</template>
<script>
import NoteWrap from "../components/NoteWrap";
import Header from "../components/Header";
import TodoWrap from "../components/TodoWrap";
export default {
  components: { NoteWrap, Header, TodoWrap},
  data() {
    return {
      show: false
    };
  }
};
</script>
<style scoped>
article {
  padding: 60px 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: scroll;
}
article::-webkit-scrollbar {
    background: transparent;
}
.header-middle-wrap {
  border: 1px solid #fff;
  border-radius: 4px;
  background: #fff;
}
.header-middle-wrap span{
  padding: 2px 8px;
  display: inline-block;
  font-size: 14px;
  font-weight: 200;
  background: #34393b;
  height: 100%;
  border-radius: 2px;
}
.header-middle-wrap .show{
  color: #222;
  background: #fff;
}
.mask{
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
  background: rgba(160, 160, 160, 0.14);
}
</style>
