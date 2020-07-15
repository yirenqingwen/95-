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
    return {
      active: 1
    };
  },
  methods: {
    ...mapMutations(["change"]),
    fanhui() {
      this.$router.go(-1);
      this.$store.commit("change", true);
    }
  },
  mounted() {
    if (this.$route.params.param) {
      if (this.$route.params.param == "还价") {
        this.active = 1;
      }
      if (this.$route.params.param == "还价") {
        this.active = 1;
      }
      if (this.$route.params.param == "还价") {
        this.active = 1;
      }
      if (this.$route.params.param == "还价") {
        this.active = 1;
      }
    }
    this.$store.commit("change", false);
  }
};
</script>

<style scoped>
.myBuy_main /deep/.van-tabs__line {
  background-color: rgb(84, 165, 102);
}
.myBuy_main {
  padding: 1vh 4vw;
}
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