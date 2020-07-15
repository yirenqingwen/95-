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
                <img :src="orderData.detailPic[0]" alt="">
            </div>
            <div class="cateItem_des">
                <p class="name">{{orderData.type}}</p>
                <p class="huohao">{{orderData.huohao}}</p>
                <p class="price">
                    <span id="price">￥{{orderData.price}}</span>
                </p>
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
      currentAddress: {},
      noneDefault: false,
      orderData:JSON.parse(window.localStorage.getItem("detailShopData"))
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
              console.log("============");
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
.cateItem_des>p{
    padding: 0.5vh 0;
}
.cateItem_des{
    width: 70%;
    padding: 1vh 0.5vw;
}
.cateItem_img>img{
    width: 100%;
}
.cateItem_img{
    width: 25%;
}
    .cateItem{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 1vh;
        padding-bottom: 1vh;
    }
    .order_main{
        padding: ;
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