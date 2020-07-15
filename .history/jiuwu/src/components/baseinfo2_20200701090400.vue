<template>
  <div class="baseinfo2">
    <div class="cate_nav">
      <van-icon @click="fanhui" class="fanhui" name="arrow-left" />基本信息
    </div>
    <div class="step">
      <van-steps :active="active">
        <van-step></van-step>
        <van-step></van-step>
        <van-step></van-step>
        <van-step></van-step>
        <van-step></van-step>
        <van-step></van-step>
      </van-steps>
    </div>
    <div class="nextBtn">
      <van-button type="primary" block>块级元素</van-button>
    </div>
  </div>
</template>


  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "baseinfo2",
  data() {
    return {
       active: 0,
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
    this.$store.commit("change", false);
  }
};
</script>

<style scoped>
.nextBtn{
  width: 100%;
  position: fixed;
  padding: 0 4vw;
}
.van-steps--horizontal {
    padding:0;
}
div {
  box-sizing: border-box;
}
</style>