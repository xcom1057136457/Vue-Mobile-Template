<template>
  <div>
    <van-row gutter="10">
      <van-col span="8" v-for="(item,index) in baseData" :key="index">
        <div
          :class="checkData == index ? 'checked' : ''"
          @click="changeData(index)"
        >{{ item.label }}</div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { Row, Col } from "vant";
export default {
  components: {
    "van-row": Row,
    "van-col": Col,
  },
  props: {
    baseData: {
      type: Array,
      default: () => {
        return [];
      },
    },
    model: {
      type: Number
    }
  },
  watch: {
    model: {
      handler(val) {
        this.checkData = val
      },
      deep: true
    }
  },
  data() {
    return {
      checkData: 0
    };
  },
  methods: {
    changeData(index) {
      this.checkData = index;
      this.$emit("checkConfirm",this.checkData)
    },
  },
};
</script>

<style lang="less" scoped>
.van-row {
  > .van-col {
    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 13px;
      padding: 11px 0;
      color: #666;
      background-color: #fafafa;
      margin-bottom: 10px;
    }
    .checked {
      background-color: rgba(77, 124, 234, 0.3);
      color: #4d7cea;
    }
  }
}
</style>