<template>
  <div class="zhifubao">
    <div class="cate_nav">
      <van-icon @click="fanhui" class="fanhui" name="arrow-left" />绑定收款账户
    </div>
    <div v-if="none" class="noneInfo">
        <div class="edit_nick">
            <h3>我的昵称</h3>
            <van-field right-icon="edit" v-model="nick" />
        </div>
        <div class="edit_nick">
            <h3>绑定手机号</h3>
            <van-field right-icon="edit" v-model="tel" />
        </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
        none:true
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
.fanhui {
  float: left;
  font-size: 18px;
}
.zhifubao {
  padding: 0 4vw;
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