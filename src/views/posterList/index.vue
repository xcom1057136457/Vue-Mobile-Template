<template>
  <div>
    <head-layout title="Poster List"></head-layout>
    <div class="posterList" @click="goPrizeList"></div>
  </div>
  
</template>

<script>
import headLayout from "../../components/headLayout";
export default {
  data(){
    return {

    }
  },
  components: {
    "head-layout": headLayout
  },
  methods: {
    goPrizeList(){
      this.$router.push({
        name: 'prizeList'
      })
    }
  },
  mounted(){

  }
}
</script>

<style lang="scss" scoped>
.posterList {
  min-height: calc(100vh - 46px);
  background-image: url('../../assets/images/poster.png');
  background-size: 100%;
  background-repeat: round;
}
</style>