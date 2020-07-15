<template>
  <div class="baseinfo2">
    <div class="cate_nav">
      <van-icon @click="fanhui" class="fanhui" name="arrow-left" />基本信息
    </div>
    <!-- 步骤条 -->
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
    <!-- 显示 -->
    <div class="fullpage">
      <template>
        <div class="f_main">
          <full-page :options="options">
            <div class="section">
              <div class="slide"> Slide a</div>
              <div class="slide"> Slide b </div>
              <div class="slide"> Slide c </div>
              <div class="slide"> Slide d </div>
            </div>
          </full-page>
        </div>
      </template>
    </div>
    <div class="nextBtn">
      <van-button @click="next" type="primary" block>{{btn_text}}</van-button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "baseinfo2",
  data() {
    return {
      btn_text: "下一步（1/6）",
      active: 0,
      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        afterLoad: this.afterLoad,
        scrollOverflow: true,
        scrollBar: false,
        menu: "#menu",
        navigation: true, 
        sectionsColor: [
          "#fff"
        ],
        slidesNavigation: true
      }
    };
  },
  methods: {
    ...mapMutations(["change"]),
    fanhui() {
      if (this.active == 0) {
        this.$router.go(-1);
        this.$store.commit("change", true);
      } else {
        this.active--;
        this.btn_text = `下一步(${this.active + 1}/6)`;
      }
    },
    next() {
      this.active++;
      if (this.active == 5) {
        this.btn_text = "提交";
      } else {
        this.btn_text = `下一步(${this.active + 1}/6)`;
      }
    }
  },
  mounted() {
    this.$store.commit("change", false);
  }
};
</script>

<style scoped>
.f_main
.f_main{
  width: 100%;
  height: 100%;
}
.fullpage{
  width: 100%;
  height: 40vh;
  overflow: hidden;
}
.nextBtn {
  width: 100%;
  position: fixed;
  bottom: 2vh;
  padding: 0 4vw;
}
.van-steps--horizontal {
  padding: 0;
}
.step {
  padding: 0 2vw;
}
div {
  box-sizing: border-box;
}
</style>