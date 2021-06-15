<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item>
      <van-image fit="cover" :src="require('../../../assets/images/1.jpg')"></van-image>
    </van-swipe-item>
    <van-swipe-item>
      <van-image fit="cover" :src="require('../../../assets/images/2.jpg')"></van-image>
    </van-swipe-item>
    <van-swipe-item>
      <van-image fit="cover" :src="require('../../../assets/images/3.jpg')"></van-image>
    </van-swipe-item>
    <van-swipe-item>
      <van-image fit="cover" :src="require('../../../assets/images/4.jpg')"></van-image>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import { Swipe, SwipeItem, Image } from "vant";
export default {
  components: {
    "van-swipe": Swipe,
    "van-swipe-item": SwipeItem,
    "van-image": Image,
  },
};
</script>

<style lang="less" scoped>
.swipWrapper {
  .van-image {
    height: 170px;
    width: 100%;
  }
}
</style>