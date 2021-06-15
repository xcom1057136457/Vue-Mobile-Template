<template>
  <div class="head">
    <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" />
  </div>
</template>

<script>
import { NavBar } from "vant";
export default {
  components: {
    "van-nav-bar": NavBar,
  },
  props: {
    title: {
      type: String,
      required: true,
      default: () => {
        return "暂未传值";
      },
    },
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
.van-nav-bar {
  color: black;
  /deep/ .van-icon,
  /deep/ .van-nav-bar__text,
  /deep/ .van-nav-bar__title {
    color: black;
    font-size: 17px;
  }
}
</style>