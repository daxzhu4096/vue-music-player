<template>
  <div class="footer-item" :class="{active: isActive}" @click="handleClickToChangeRoute">
    <slot name="active-img" class="footer-item-icon" ></slot>
    <slot name="title" class="footer-item-title"></slot>
  </div>
</template>

<script>
export default {
  props: ['info', 'uid', 'route'],
  computed: {
    isActive() {
      if(this.uid === this.info) {
        return true
      }
    }
  },
  methods: {
    handleClickToChangeRoute(){
      this.$emit('linkChange',this.uid)
      this.$router.push(this.route)
    }
  }
}
</script>


<style scoped>
.footer-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(200, 200, 200, 0.77);
  padding-top: 5px;
}
.footer-item img {
  width: 28px;
}
.footer-item span {
  font-size: 10px;
}
.active {
  color:#fff;
}
</style>
