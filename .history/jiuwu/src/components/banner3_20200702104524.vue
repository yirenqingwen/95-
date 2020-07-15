<template>
  <div class="banner">
    <div class="cate_nav">
      <van-icon @click="fanhui" class="fanhui" name="arrow-left" />潮流，想换就换
    </div>
    <div class="ban_pic">
        <img src="../../public/image/id2.jpg" alt="">
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
  mounted () {
    this.$store.commit("change", true);
  }
};
</script>

<style scoped>
.ban_pic>img{
    width: 100%;
}
.fanhui {
  float: left;
  font-size: 18px;
}
.cate_nav {
  width: 100%;
  padding: 2vh 2vw;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
}
</style>