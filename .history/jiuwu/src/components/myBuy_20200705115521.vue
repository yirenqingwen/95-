<template>
  <div class="myBuy">
    <div class="cate_nav">
      <van-icon @click="fanhui" class="fanhui" name="arrow-left" />我的购买
    </div>
    <div class="myBuy_main">
      <van-tabs v-model="active">
        <van-tab title="还价"><p>暂无数据</p></van-tab>
        <van-tab title="待支付">内容 2</van-tab>
        <van-tab title="待收货"><p>暂无数据</p></van-tab>
        <van-tab title="历史交易"><p>暂无数据</p></van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      active: 0,
      mywaitPay:[],
    };
  },
  mounted() {
    this.$store.commit("change", false);
    if (this.$route.params.param) {
      if (this.$route.params.param == "还价") {
        this.active = 0;
      }
      if (this.$route.params.param == "待支付") {
        this.active = 1;
      }
      if (this.$route.params.param == "待收货") {
        this.active = 2;
      }
      if (this.$route.params.param == "历史交易") {
        this.active = 3;
      }
    }
  },
  methods: {
    ...mapMutations(["change"]),
    fanhui() {
      this.$router.go(-1);
      this.$store.commit("change", true);
    }
  },
  watch: {
    active() {
      if (this.active == 1) {
        this.api.mywaitPay({user:this.$cookies.get("user_id")}).then(
          res=>{
            this.mywaitPay=res.data.data
            console.log(this.mywaitPay)
          }
        )
      }
    }
  }
};
</script>

<style scoped>
.myBuy_main /deep/.van-tabs__line {
  background-color: rgb(84, 165, 102);
}
.myBuy_main {
  padding: 1vh 4vw;
}
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