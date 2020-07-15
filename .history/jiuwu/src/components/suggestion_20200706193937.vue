<template>
  <div class="suggestion">
    <div class="cate_nav">
      <van-icon @click="fanhui" class="fanhui" name="arrow-left" />意见反馈
    </div>
    <div class="suggestion_main">
      请让我们了解更多
      <van-field
        v-model="message"
        rows="3"
        autosize
        type="textarea"
        maxlength="50"
        placeholder="分享你的体验，有哪些需要改进的地方（必填）"
        show-word-limit
      />
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
        message:"",
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
。suggestion_main
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