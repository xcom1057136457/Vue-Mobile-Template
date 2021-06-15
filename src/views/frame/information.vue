<template>
  <div class="information">
    <div class="topWrapper">
      <div class="imgae">
        <van-image round fit="cover" :src="require('../../assets/images/avatar.jpg')"></van-image>
      </div>
      <div class="text">{{ userConfig.userName }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Image } from "vant";
export default {
  components: {
    "van-image": Image,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["userConfig"]),
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="less" scoped>
.information {
  > .topWrapper {
    background-color: #fff;
    border: 1px solid transparent;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding-bottom: 10px;
    .imgae {
      width: 100px;
      height: 100px;
      margin: 20px auto;
    }
    .text {
      font-size: 20px;
      color: #666;
      text-align: center;
      margin-top: 20px;
    }
  }
}
</style>