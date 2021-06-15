<template>
  <div class="prizeList">
    <head-layout title="Prize List"></head-layout>
    <van-pull-refresh
      class="px_10 py_10"
      v-model="isLoading"
      @refresh="onRefresh"
      success-text="Load Success"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="Nothing to Load"
        @load="onLoad"
      >
        <prizeList></prizeList>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import headLayout from "../../components/headLayout";
import { Row, Col, Icon, Image, PullRefresh, List } from "vant";
import prizeItem from "../../assets/json/prizeList.json";
import prizeList from "./components/prizeList";
export default {
  components: {
    "head-layout": headLayout,
    "van-row": Row,
    "van-col": Col,
    "van-icon": Icon,
    "van-image": Image,
    prizeList,
    "van-pull-refresh": PullRefresh,
    "van-list": List,
  },
  data() {
    return {
      prizeItem: prizeItem,
      isLoading: false,
      loading: false,
      finished: true,
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
    onLoad() {},
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
::v-deep .van-list__finished-text {
  line-height: unset;
}

::v-deep .van-list {
  min-height: calc(100vh - 46px);
}
</style>
