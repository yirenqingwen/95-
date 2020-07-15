<template>
  <div class="settings">
    <div class="cate_nav">
      <van-icon @click="fanhui" class="fanhui" name="arrow-left" />设置
    </div>
    <div class="settings_con">
      <van-cell title-class="iconfont icon-gerenziliao-01" title="个人资料" is-link />
      <van-cell title-class="iconfont icon-gerenzhongxin-dizhiguanli" title="地址管理" is-link />
      <van-cell title-class="iconfont icon-zijinzhanghu2" title="收款账户" is-link />
      <van-cell title-class="iconfont icon-shanchu" title="缓存清理" is-link />
      <van-cell title-class="iconfont icon-guanyuwomen" title="关于95分" is-link />
      <van-cell title-class="iconfont icon-exit-logon" title="退出登录" is-link />
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
.van-cell__title::before{
    padding-right: 4vw;
    font-size: 20px;
    font-weight: 600;
    color: black;
}
.settings_con /deep/.van-cell--clickable:active {
    background-color: #fff;
}
.settings_con /deep/ img {
  vertical-align: inherit;
}
.settings_con /deep/ .van-cell {
  padding: 2vh 0 2vh;
  font-size: 14px ;
  font-weight: 550;
  color: black;
}
.settings_con {
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