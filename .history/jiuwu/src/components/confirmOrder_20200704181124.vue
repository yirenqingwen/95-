<template>
  <div class="confirmOrder">
    <div class="cate_nav">
      <van-icon @click="fanhui" class="fanhui" name="arrow-left" />确认订单
    </div>
    <div class="shouhuoren">
      <div v-if="!noneDefault" @click="selectAddress" class="current">
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
      <div v-if="noneDefault" @click="selectAddress" class="noneDefault">
        <div>
          <van-icon class="green" name="location-o" />
        </div>
        <div class="addText">
          <span style="color:black;font-weight:600;">点击添加收货信息</span>
        </div>
        <div class="icon2">
          <van-icon name="plus" />
        </div>
      </div>
      <div class="line">
        <img src="../../public/image/line.jpg" alt />
      </div>
    </div>
    <div class="order_main">
      <div class="cateItem">
        <div class="cateItem_img">
          <img :src="orderData.detailPic[0]" alt />
        </div>
        <div class="cateItem_des">
          <p class="name">{{orderData.type}}</p>
          <p class="huohao">{{orderData.huohao}}</p>
          <p class="price">
            <span id="price">￥{{orderData.price}}.00</span>
          </p>
        </div>
      </div>
      <div class="promise">
        <img src="../../public/image/promise.jpg" alt />
      </div>
      <div class="xihu">
        <div class="xihu_des">
          <div class="des_top">
            深度洗护服务
            <van-icon class="i" name="question-o" />
            <span class="tag">限时优惠</span>
          </div>
          <div class="des_bot">全面清洗·安心购买·放心穿着</div>
        </div>
        <div class="xihu_price">
              <div class="check_left">
                  ￥29.90 <br>
                  <del>￥39.90</del>
              </div>
              <van-checkbox checked-color="#07c160" v-model="checked"></van-checkbox>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
        checked:false,
      currentAddress: {},
      noneDefault: false,
      orderData: JSON.parse(window.localStorage.getItem("detailShopData"))
    };
  },
  methods: {
    ...mapMutations(["change"]),
    fanhui() {
      this.$router.go(-1);
      this.$store.commit("change", true);
    },
    selectAddress() {
      this.$router.push({ name: "addressList", params: { order: "order" } });
    }
  },
  mounted() {
    // 选择地址
    if (this.$route.params.address) {
      this.currentAddress = this.$route.params.address;
    } else {
      //   查询默认地址
      this.api
        .getAddressLis({ user: this.$cookies.get("user_id") })
        .then(res => {
          res.data.data.forEach(item => {
            if (item.isDefault == true) {
              this.currentAddress = {
                ...item,
                address:
                  item.province + item.city + item.county + item.addressDetail
              };
            }
          });
          if (JSON.stringify(this.currentAddress) == "{}") {
            this.noneDefault = true;
          }
        });
    }
    this.$store.commit("change", false);
  }
};
</script>

<style scoped>
.check_left>del{
    color: #999;
}
.check_left{
    padding-right: 4vw;
    color: black;
    font-weight: 600;
}
.tag{
    display: block;
    padding: 0.2vh 1.5vw ;
    color: white;
    background: rgb(205,153,89);
    font-weight: normal;
    border-radius: 0.3vh;
}
.des_bot{
    color: #999;
    font-size: 12px;
}
.i{
    color: black;
    font-weight: 600;
    margin: 0 1vw;
}
.des_top{
    display: flex;
    /* justify-content: space-between ; */
    align-items: center;
    color: black;
    font-weight: 600;
    font-size: 12px;
}
.xihu{
    display: flex;
    justify-content: space-between ;
    align-items: center;
    padding: 1.5vh 0;
}
.xihu_price{
    display: flex;
    justify-content: space-between ;
    align-items: center;
}
.promise > img {
  width: 100%;
}
#price {
  font-size: 12px;
  font-weight: 600;
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
  margin-bottom: 1vh;
  padding-bottom: 1vh;
}
.order_main {
  padding: 4vh 4vw;
}
.green {
  color: rgb(84, 165, 102);
  font-size: 18px;
}
.noneDefault {
  display: flex;
  justify-content: space-around;
  padding: 1vh 2vw;
  align-items: center;
  border: 1px dashed #999;
  background: rgb(250, 250, 250);
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
}
.line > img {
  width: 100%;
}
.line {
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  left: 0;
  bottom: -2vh;
}
.shouhuoren {
  position: relative;
  width: 100%;
  box-sizing: border-box;
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