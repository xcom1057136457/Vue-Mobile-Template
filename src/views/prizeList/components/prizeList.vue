<template>
  <div>
    <div
      class="mb_10 bc_fff px_10 py_10 box_shadow_4"
      v-for="(item,index) in prizeItem"
      :key="index"
      :style="{ 'animation': 'bounceInRight ' + ((index + 1) * 0.2 + 1) + 's 1' }"
    >
      <div class="topWrapper flex_box align_center border_b_EA pb_10">
        <div class="flex_1 align_center flex_box">
          <van-icon name="smile-o" class="inline_block mr_5 font_size14" />
          <span class="font_size14 color_666">{{ item.actName }}</span>
        </div>
        <div class="flex_1 flex_box align_center justify_end font_size12 color_666">2020-06-15</div>
      </div>

      <div class="detailWrapper py_10 flex_box mb_6">
        <div class="mr_8">
          <div class="imageBox">
            <van-image :src="require('../../../assets/images/mobile.png')" fit="fill"></van-image>
          </div>
        </div>
        <div class="detail flex_column">
          <div class="font_size13 mb_4 color_333">{{ item.prizeName }}</div>
          <div class="font_size12 color_999">{{ item.prizeSize }}</div>
        </div>
      </div>

      <div class="btnsWrapper justify_end">
        <div class="font_size12 color_3B px_10 py_5 border_xy_C8 border_radius_8 mr_10">使用说明</div>
        <div
          class="font_size12 color_3B px_10 py_5 border_xy_C8 border_radius_8"
          @click="goLogistics"
        >物流信息</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Row, Col, Icon, Image } from "vant";
import prizeItem from "../../../assets/json/prizeList.json";
export default {
  components: {
    "van-row": Row,
    "van-col": Col,
    "van-icon": Icon,
    "van-image": Image,
  },
  data() {
    return {
      prizeItem: prizeItem,
    };
  },
  methods: {
    goLogistics() {
      this.$router.push({
        name: "logistics",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.imageBox,
.van-image {
  width: 45px;
  height: 45px;
  overflow: hidden;
}
</style>