<template>
  <div class="orderDetail">
    <div class="cate_nav">
      <van-icon class="fanhui" @click="fanhui" name="arrow-left" />
      <span>订单详情</span>
      <span class="delate" @click="kefu"><van-icon class="service" name="service" /></span>
    </div>
    <div v-text="orderDetailData.status" class="orderDetail_top"></div>
    <div class="orderDetail_main">
      
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      orderDetailData:{},
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
        this.orderDetailData=this.$route.params.data
        window.localStorage.setItem("orderDetail",JSON.stringify(this.$route.params.data))
    }else{
        console.log("________")
       this.orderDetailData=
    }
    console.log(this.orderDetailData)
  }
};
</script>

<style scoped>
.orderDetail_top{
    width: 100%;
    padding: 2vh 4vw;
    color: white;
    font-size: 22px;
    background: #1a1a1a;
}
.service{
    font-size: 20px;
    padding-right: 2vw;
}
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