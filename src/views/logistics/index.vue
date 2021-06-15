<template>
  <div class="logistics">
    <head-layout title="Logistics Information"></head-layout>
    <div class="h_100 bc_4d7 color_fff py_26 px_20 f-a-c">
      <div class="flex_box">
        <div class="left_image mr_10">
          <van-image
            class="first_image"
            fit="fill"
            :src="require('../../assets/images/circle.png')"
          ></van-image>
          <van-image class="second_image" fit="fill" :src="require('../../assets/images/car.png')"></van-image>
        </div>
        <div class="detail justify_center flex_column">
          <div class="font_size15 color_fff mb_5">顺丰（物流处理中）</div>
          <div class="font_size12 color_fff">运单号：738220938383776</div>
        </div>
      </div>
    </div>

    <div class="bottomWrapper bc_fff">
      <div class="mt_20 ml_20 color_666">订单跟踪</div>

      <div class="pt_15 px_15">
        <van-steps direction="vertical" :active="0" active-color="#4D7CEA">
          <van-step v-for="(item,index) in logistic" :key="index">
            <p class="font_size13">{{ item.content }}</p>
            <p class="font_size12">{{ item.date }}</p>
          </van-step>
        </van-steps>
      </div>
    </div>
  </div>
</template>

<script>
import headLayout from "../../components/headLayout";
import { Image, Steps, Step } from "vant";
import logistic from '../../assets/json/logistics.json'
export default {
  data() {
    return {
      logistic
    };
  },
  components: {
    "head-layout": headLayout,
    "van-image": Image,
    "van-steps": Steps,
    "van-step": Step,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.first_image {
  width: 48px;
  height: 48px;
}

.left_image {
  position: relative;
  display: inline-block;
}

.second_image {
  width: 31px;
  height: 21px;
  position: absolute;
  top: 50%;
  margin-top: -10px;
  left: 50%;
  margin-left: -15px;
}

.bottomWrapper {
  min-height: calc(100vh - 146px);
  border: 1px solid transparent;
}
</style>