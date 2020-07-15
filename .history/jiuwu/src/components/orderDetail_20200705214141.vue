<template>
  <div class="orderDetail">
    <div class="cate_nav">
      <van-icon class="fanhui" @click="fanhui" name="arrow-left" />
      <span>订单详情</span>
      <span class="delate" @click="kefu">
        <van-icon class="service" name="service" />
      </span>
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
      <div class="icon2"></div>
    </div>
    <div class="line"></div>
    <div class="orderDetail_main">
      <div class="cateItem" @click="gotoDeatil(shangpin)">
        <div class="cateItem_img">
          <img :src="shangpin.detailPic[0]" alt />
        </div>
        <div class="cateItem_des">
          <p class="name">{{shangpin.type}}</p>
          <p class="huohao">{{shangpin.huohao}} · {{shangpin.perfect}}级</p>
          <p class="price">
            <span id="price">￥{{shangpin.price}}</span>
          </p>
        </div>
      </div>
      <div class="zhangdan">
        <div class="zhangdan_item">
          商品总额
          <span>￥{{shangpin.price}}</span>
        </div>
        <div class="zhangdan_item">
          顺丰速运
          <span>￥23.00</span>
        </div>
        <div v-if="orderDetailData.deepWash" class="zhangdan_item">
          深度洗护服务
          <span>￥29.90</span>
        </div>
        <div class="zhangdan_item">
          App首单免邮
          <span style="color:red;">-￥23.00</span>
        </div>
      </div>
        <div class="Nomoney">
            实付款（含运费）<strong>￥{{(orderDetailData.deepWash==false?shangpin.price:shangpin.price+29.90).toFixed(2)}}</strong>
        </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      orderDetailData: {},
      currentAddress: {},
      shangpin: { detailPic: [] }
    };
  },
  methods: {
    ...mapMutations(["change"]),
    fanhui() {
      this.$router.go(-1);
      this.$store.commit("change", true);
    },
    kefu() {},
    gotoDeatil(data) {
      this.$router.push({ name: "detail", params: { value: data } });
    }
  },
  mounted() {
    this.$store.commit("change", false);
    if (this.$route.params.data) {
      this.orderDetailData = this.$route.params.data;
      window.localStorage.setItem(
        "orderDetail",
        JSON.stringify(this.$route.params.data)
      );
    } else {
      this.orderDetailData = JSON.parse(
        window.localStorage.getItem("orderDetail")
      );
    }
    this.currentAddress = this.orderDetailData.address;
    this.shangpin = this.orderDetailData.order;
    console.log(this.orderDetailData);
  }
};
</script>

<style scoped>
.Nomoney{
    padding: 1vh 0;
    display: flex;
    justify-content: space-between;
    color: black;
    font-weight: 600;
}
.zhangdan_item {
  color: black;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
}
.zhangdan {
  padding: 1.5vh 0;
  border-top: 1px solid #f4f4f4;
  border-bottom: 1px solid #f4f4f4;
}
#price {
  font-size: 16px;
  font-weight: 600;
  color: black;
}
.price {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.huohao {
  font-size: 10px;
  color: #ccc;
}
.name {
  font-size: 13px;
  color: black;
}
.cateItem_des > p {
  padding: 0.5vh 0;
}
.cateItem_des {
  width: 70%;
  padding: 1vh 0.5vw;
}
.cateItem_img > img {
  width: 100%;
}
.cateItem_img {
  width: 25%;
}
.cateItem {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 1vh;
}
.orderDetail_main {
  padding: 1vh 4vw;
  background: white;
  margin-top: 1vh;
}
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
  padding: 1vh 4vw;
  background: white;
}
.orderDetail_top {
  width: 100%;
  padding: 2vh 4vw;
  color: white;
  font-size: 22px;
  background: #1a1a1a;
  letter-spacing: 3px;
}
.service {
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
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  width: 100%;
  padding: 2vh 2vw;
  font-size: 16px;
  font-weight: 600;
}

.line{}
.orderDetail {
  /* background: #f8f8f8; */
  height: 100%;
}
div {
  box-sizing: border-box;
}
</style>