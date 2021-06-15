<template>
  <div class="login">
    <div class="topWrapper">Vue Mobile Template</div>
    <div class="formWrapper">
      <div class="topText">Please Input Your Information</div>
      <van-form @submit="onSubmit">
        <van-field
          v-model="params.username"
          name="username"
          label="UserName"
          placeholder="UserName"
          :rules="[{ required: true, message: 'Please Input Your UserName' }]"
        />
        <van-field
          v-model="params.password"
          type="password"
          name="password"
          label="PassWord"
          placeholder="PassWord"
          :rules="[{ required: true, message: 'Please Input Your PassWord' }]"
        />
        <div class="btnsWrapper">
          <van-button 
            block 
            native-type="submit" 
            plain 
            type="default"
            hairline
          >
            Submit
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { Form, Field, Button } from "vant";
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      params: {},
    };
  },
  components: {
    "van-form": Form,
    "van-field": Field,
    "van-button": Button,
  },
  methods: {
    ...mapActions(['getUserConfig']),
    onSubmit(val) {
      this.getUserConfig(val);
      this.$router.push({
        name: 'active'
      })
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.formWrapper {
  flex: 1;
  background-color: #fff;
  // padding-top: 80px;
  .btnsWrapper {
    margin-top: 120px;
    padding: 10px;
  }
  > .topText {
    line-height: 40px;
    padding-left: 10px;
    font-size: 18px;
    border-bottom: 1px solid #f0f0f0;
    border-top: 1px solid #f0f0f0;
    color: #666;
  }
}
.topWrapper {
  flex-grow: 0;
  flex-basis: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  background-color: #fff;
}
</style>