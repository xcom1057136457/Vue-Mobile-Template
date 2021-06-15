<template>
  <van-tabbar
    :fixed="false"
    @change="onChange"
    v-model="active"
    active-color="rgba(0,0,0,1)"
    inactive-color="rgba(0,0,0,0.4)"
  >
    <van-tabbar-item
      v-for="(item, index) in footList"
      :key="index"
      :name="item.name"
      :icon="item.icon"
    >{{ item.title }}</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  components: {
    "van-tabbar": Tabbar,
    "van-tabbar-item": TabbarItem,
  },
  data() {
    return {
      active: this.$route.name,
      footList: this.footList,
    };
  },
  methods: {
    onChange(index) {
      this.$router.push({
        path: `/${index}`,
      });
    },
  },
};
</script>