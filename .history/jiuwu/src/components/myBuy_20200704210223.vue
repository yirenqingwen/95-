<template>
  <div class="myBuy">
    <div class="cate_nav">
      <van-icon @click="fanhui" class="fanhui" name="arrow-left" />我的购买
    </div>
    <div class="myBuy_main">
      <van-tabs v-model="active">
        <van-tab title="还价">内容 1</van-tab>
        <van-tab title="待支付">内容 2</van-tab>
        <van-tab title="待收货">内容 3</van-tab>
        <van-tab title="历史交易">内容 4</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["change"]),
    fanhui() {
      this.$router.go(-1);
      this.$store.commit("change", true);
    }
  },
  mounted() {
    this.$store.commit("change", false);
  }
};
</script>

<style scoped>
.fanhui {
  float: left;
  font-size: 18px;
}
.cate_nav {
  color: black;
  width: 100%;
  padding: 2vh 2vw;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
}
div {
  box-sizing: border-box;
}
</style>