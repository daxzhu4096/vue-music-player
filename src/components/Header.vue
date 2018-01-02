<template>
  <header>
    <div class="bg-img" :style="{backgroundImage: `url(${bgStyle})`}"></div>
    <div class="mask" :style="{background: bg}"></div>
    <div class="header-item header-left">
      <slot name="header-left"></slot>
    </div>
    <div class="header-item header-middle">
      <slot name="header-middle"></slot>
    </div>
    <div class="header-right">
    </div>
  </header>
</template>
<script>
export default {
  props: ['bgStyle','bg']
}
</script>

<style scoped>
header {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 50px;
  z-index: 9;
  display: flex;
  justify-content: space-between;
  color: #fff;
  background: #ddd;
}
header>div{
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
header h2{
  font-size: 16px;
  margin: 0;
  font-weight: 200;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
p{
  font-size: 12px;
  margin:0;
  font-weight: 100;
}
.header-item{
  z-index: 20;
  padding: 0 10px;
}
.header-middle{
  width: 70%;
  overflow: hidden;
}
.header-right{
  width: 50px;
}
.bg-img {
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100%;
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
</style>

