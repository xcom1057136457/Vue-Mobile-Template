<template>
  <div class="active">
    <div class="swipWrapper">
      <image-swip></image-swip>
    </div>
    <div class="actListBar">
      <van-cell title="Go To Act List" is-link to="actList"/>
    </div>
    <div class="detailWrapper">
      <van-empty description="Nothing" />
    </div>
  </div>
</template>

<script>
import ImageSwip from './components/ImageSwip'
import { Cell, Empty } from 'vant'
export default {
  data() {
    return {
     
    };
  },
  components: {
    "image-swip": ImageSwip,
    "van-cell": Cell,
    "van-empty": Empty
  },
};
</script>

<style lang="less" scoped>
.actListBar {
  margin-top: 10px;
  box-shadow: 0px 4px 12px 0px #ebf1ff;
}
</style>