<template>
  <div class="orderDetail">
    <div class="cate_nav">
      <van-icon class="fanhui" @click="fanhui" name="arrow-left" />
      <span>订单详情</span>
      <span class="delate" @click="kefu">删除地址</span>
    </div>
    <div class="orderDetail_main">
      
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      
    };
  },
  methods: {
    ...mapMutations(["change"]),
    fanhui() {
      this.$router.go(-1);
      this.$store.commit("change", true);
    },
    kefu(){}
  },
  mounted() {
    this.$store.commit("change", false);
    if(this.$route.params.data){
        window.localStorage.setItem("orderDetail",this.$route.params.data)
    }else
  }
};
</script>

<style scoped>

.delate {
  font-weight: normal;
  font-size: 14px;
}
.fanhui {
  font-size: 18px;
  width: 50px;
  text-align: left;
}
.cate_nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  width: 100%;
  padding: 2vh 2vw;
  font-size: 16px;
  font-weight: 600;
}
div {
  box-sizing: border-box;
}
</style>