<template>
  
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      zhifubaochecked: false,
      wechatchecked: false,
      checked: false,
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
.orderBot>span{
    color: black;
    font-weight: 600;
    font-size: 14px;
}
.orderBot{
    padding: 1vh 4vw;
    position: absolute;
    bottom: 2vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}
.pay>p{
    font-size: 11px;
    padding-top: 2vh;
}
.pay_item /deep/.van-cell__left-icon>img{
    width: 100%;
    height: 100%;
}
.pay_item /deep/.van-cell__left-icon{
    display: flex;
    align-items: center;
    width: 4vw;
}
.pay_item /deep/ .van-cell {
    width: 90%;
  padding: 0.5vh 0;
}
.pay_item{
    display: flex;
    justify-content: space-between;
}
.pay{
    padding: 1vh 0;
}
.zhangdan_item {
  color: black;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
}
.zhangdan {
  padding: 1.5vh 0;
}
.youhuiquan /deep/ .van-cell {
  padding: 0.5vh 0;
}
.check_left > del {
  color: #999;
  font-weight: normal;
}
.check_left {
  padding-right: 4vw;
  color: black;
  font-weight: 600;
}
.tag {
  display: block;
  padding: 0.2vh 1.5vw;
  color: white;
  background: rgb(205, 153, 89);
  font-weight: normal;
  border-radius: 0.3vh;
}
.des_bot {
  color: #999;
  font-size: 12px;
}
.i {
  color: black;
  font-weight: 600;
  margin: 0 1vw;
}
.des_top {
  display: flex;
  /* justify-content: space-between ; */
  align-items: center;
  color: black;
  font-weight: 600;
  font-size: 12px;
}
.xihu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5vh 0;
}
.xihu_price {
  display: flex;
  justify-content: space-between;
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
.confirmOrder{
    position: relative;
    height: 100%;
}
div {
  box-sizing: border-box;
}
</style>