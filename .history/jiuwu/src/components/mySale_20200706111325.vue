<template>
  <div class="mySale">
    <div v-if="show" class="consignment">
      <div class="cate_nav">
        <van-icon @click="fanhui" class="fanhui" name="arrow-left" />寄售商品
      </div>
    </div>
    <div v-if="!show" class="guashou">
      <div class="cate_nav">
        <van-icon @click="fanhui" class="fanhui" name="arrow-left" />
      </div>
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