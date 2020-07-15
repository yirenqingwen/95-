<template>
  <div class="orderDetail">
    <div class="cate_nav">
      <van-icon class="fanhui" @click="fanhui" name="arrow-left" />
      <span>订单详情</span>
      <span class="delate" @click="kefu"><van-icon class="service" name="service" /></span>
    </div>
    <div v-text="orderDetailData.status" class="orderDetail_top"></div>
    <div class="current">
          <div class="icon">
            <van-icon name="location-o" />
          </div>
          <div class="addText">
            <p>
              {{currentAddress.name}}
              <span>{{currentAddress.tel}}</span>
            </p>
            <p>{{currentAddress.address}}</p>
          </div>
          <div class="icon2">
            <van-icon name="arrow" />
          </div>
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
      orderDetailData:{},
      currentAddress:{}
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
       this.orderDetailData=JSON.parse(window.localStorage.getItem("orderDetail"))
    }
    this.currentAddress=this.orderDetailData.address
    console.log(this.orderDetailData)
  }
};
</script>

<style scoped>
.addText > p > span {
  padding-left: 2vw;
  color: #999;
}
.addText > p:nth-child(1) {
  color: black;
  font-weight: 600;
}
.addText > p {
  padding: 1vh 1vw 0;
  color: black;
}
.addText {
  width: 80%;
  text-align: left;
}
.icon2 {
  font-size: 20px;
  color: #999;
}
.icon {
  font-size: 28px;
  color: black;
}
.current {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.orderDetail_top{
    width: 100%;
    padding: 2vh 4vw;
    color: white;
    font-size: 22px;
    background: #1a1a1a;
    letter-spacing: 3px;
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