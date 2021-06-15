<template>
  <div id="app">
    <div class="wrapper">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" :key="routerKey"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" :key="routerKey"></router-view>
    </div>
    <div class="bottomFoot" v-if="$route.meta.foot">
      <eFoot></eFoot>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import eFoot from "./components/eFoot";
export default {
  components: {
    eFoot: eFoot,
  },
  data() {
    return {
      routerKey: Date.parse(new Date()),
      isScrolling: false,
      active: "home",
    };
  },
  created() {
    window.addEventListener("scroll", this.onScroll);
  },
  methods: {
    ...mapActions("scrollInfo", ["onScroll"]),
    onChange(index) {},
  },
};
</script>

<style lang="less">
@import "./assets/css/font.less";

* {
  margin: 0;
  padding: 0;
  list-style: none;
}

html,
body,
#app {
  height: 100%;
  background-color: rgb(251, 252, 255);
  font-family: Poppins, -apple-system, BlinkMacSystemFont, "Helvetica Neue",
    Helvetica, Segoe UI, Arial, Roboto, "PingFang SC", "Hiragino Sans GB",
    "Microsoft Yahei", sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  > .wrapper {
    flex: 1;
    overflow-y: auto;
  }
  > .bottomFoot {
    flex-grow: 0;
    flex-basis: 50px;
    overflow: hidden;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
}
</style>
