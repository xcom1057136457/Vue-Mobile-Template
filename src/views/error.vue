<template>
  <div class="error">
    <head-layout title="Error Page"></head-layout>
    <div class="wrapper">
      <van-empty image="error" description="The interface does not exist !!!">
        <van-button 
          round 
          type="info" 
          plain 
          hairline 
          class="bottom-button"
          color="#000"
          to="/"
        >
          Go To The First Page
        </van-button>
      </van-empty>
    </div>
  </div>
</template>

<script>
import headLayout from "../components/headLayout";
import { Empty, Button } from "vant";
export default {
  components: {
    "head-layout": headLayout,
    "van-empty": Empty,
    "van-button": Button,
  }
};
</script>

<style lang="less" scoped>
.error {
  height: 100%;
  display: flex;
  flex-direction: column;
  > .wrapper {
    flex: 1;
    margin-top: 100px;
  }
}
</style>