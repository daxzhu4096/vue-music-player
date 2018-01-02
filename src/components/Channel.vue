<template>
  <section class="channel" @click="play">
    <img :src="channel.cover_small">
    <h2>{{channel.name}}</h2>
  </section>
</template>
<script>
export default {
  name: "channel",
  props: ["channel"],
  methods: {
    play(){
      this.$store.dispatch('next',this.channel.channel_id)
      this.$store.dispatch('changePlayerShow')
    }
  }
};
</script>
<style scoped>
.channel {
  max-width: 160px;
  margin-bottom: 15px;
  min-width: 100px;
}
.channel  {
  text-decoration: none;
  color: black;
}
.channel img {
  width: 100%;
}
.channel h2 {
  font-size: 12px;
  font-weight: normal;
  text-align: center;
  margin-top: 4px;
}
img {
  box-shadow: 1px 1px 7px #5d5656;
}
</style>
