<template>
  <div class="settings">
    <div class="cate_nav">
      <van-icon @click="fanhui" class="fanhui" name="arrow-left" />设置
    </div>
    <div class="person_con">
      <van-cell title-class="iconfont icon-gerenziliao-01" title="寄售商品" is-link />
      <van-cell title-class="iconfont icon-gerenziliao-01" title="挂售商品" is-link />
      <van-cell title-class="iconfont icon-gerenziliao-01" title="挂售商品" is-link />
      <van-cell title-class="iconfont icon-gerenziliao-01" title="挂售商品" is-link />
      <van-cell icon="http://localhost:3000/image/icon_guasale.jpg" title="挂售商品" is-link />
      <van-cell icon="http://localhost:3000/image/icon_guasale.jpg" title="挂售商品" is-link />
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
    this.$store.commit("change", false);
  }
};
</script>

<style scoped>
.person_con /deep/.van-cell--clickable:active {
    background-color: #fff;
}
.person_con /deep/ img {
  vertical-align: inherit;
}
.person_con /deep/ .van-cell {
  padding: 2vh 0 2vh;
  font-size: 14px;
  font-weight: 540;
}
.person_con {
  padding: 1vh 4vw 0;
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
div{
    box-sizing: border-box;
}
</style>