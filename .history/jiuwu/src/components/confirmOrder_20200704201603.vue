<template>
  <div class="fuapp">
    <!-- 订单页面 -->
    <div v-if="xianshidingdan" class="confirmOrder">
      <div class="cate_nav">
        <van-icon @click="fanhui" class="fanhui2" name="arrow-left" />确认订单
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
              ￥29.90
              <br />
              <del>￥39.90</del>
            </div>
            <van-checkbox checked-color="#07c160" v-model="checked"></van-checkbox>
          </div>
        </div>
        <div class="youhuiquan">
          <van-cell title="优惠券" is-link value="暂无可用优惠券" />
        </div>
        <div class="zhangdan">
          <div class="zhangdan_item">
            商品总额
            <span>￥{{orderData.price}}</span>
          </div>
          <div class="zhangdan_item">
            运费
            <span>￥0.00</span>
          </div>
          <div v-if="checked" class="zhangdan_item">
            深度洗护服务
            <span>￥29.90</span>
          </div>
          <div class="zhangdan_item">
            App首单免邮
            <span style="color:red;">-￥0.00</span>
          </div>
        </div>
        <div class="pay">
          <div class="pay_item">
            <van-cell title="支付宝" icon="http://localhost:3000/image/wechat_03.jpg" />
            <van-checkbox checked-color="#07c160" v-model="zhifubaochecked"></van-checkbox>
          </div>
          <div class="pay_item">
            <van-cell title="微信支付" icon="http://localhost:3000/image/wechat_06.jpg" />
            <van-checkbox checked-color="#07c160" v-model="wechatchecked"></van-checkbox>
          </div>
          <p>
            确认提交订单即同意
            <a href>《95分买家协议》</a>及
            <a href>《洗护服务协议》</a>
          </p>
        </div>
      </div>
      <div class="orderBot">
        <span>
          实付款：
          <strong style="color:red;">￥{{checked==false?orderData.price:orderData.price+29.9}}</strong>
        </span>
        <van-button @click="goaway" type="primary">立即购买</van-button>
      </div>
    </div>
    <!-- 地址列表组件 -->
    <div v-if="!xianshidingdan" class="addressList">
      <div class="cate_nav">
        <van-icon @click="fanhui2" class="fanhui" name="arrow-left" />地址管理
      </div>
      <div class="address_main">
        <van-address-list
          v-if="or"
          v-model="chosenAddressId"
          :list="list"
          default-tag-text="默认地址"
          @add="onAdd"
          @edit="onEdit"
          @select="onSelect"
        />
        <van-address-edit
          v-if="!or"
          :area-list="areaList"
          show-set-default
          show-search-result
          :search-result="searchResult"
          area-placeholder="请选择所在地区"
          :area-columns-placeholder="['请选择', '请选择', '请选择']"
          @save="onSave"
        />
        <div class="zanwudizhi" v-if="zanwudizhi">暂无地址信息</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import area from "../../area/areaList.js";
export default {
  data() {
    return {
      xianshidingdan: true,
      chosenAddressId: "1",
      or: true,
      list: [],
      areaList: area,
      searchResult: [],
      zanwudizhi: false,
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
      this.xianshidingdan = false;
    },
    fanhui2() {
      this.xianshidingdan = true;
    },
    onAdd() {
      this.or = !this.or;
    },
    onEdit(item, index) {
      this.$router.push({ name: "addressEdit", params: { address: item } });
    },
    onSave(content) {
      // console.log(content)
      this.api
        .saveAddress({ user: this.$cookies.get("user_id"), address: content })
        .then(res => {
          this.$toast(res.data.msg);
          this.or = !this.or;
          this.getAddress();
        });
    },
    getAddress() {
      this.list = [];
      this.api
        .getAddressLis({ user: this.$cookies.get("user_id") })
        .then(res => {
          console.log(res);
          if (res.data.msg == "暂无数据") {
            this.zanwudizhi = true;
          } else {
            this.zanwudizhi = false;
            let tmp = res.data.data;
            tmp.forEach((item, index) => {
              if (item.isDefault == false) {
                this.list.push({
                  ...item,
                  address:
                    item.province + item.city + item.county + item.addressDetail
                });
              } else {
                // tmp.splice(index, 1)[0];
                // console.log(defaultAddress)
                this.list.unshift({
                  ...item,
                  address:
                    item.province + item.city + item.county + item.addressDetail
                });
              }
            });
          }
        });
      console.log(this.list);
    },
    onSelect(item, index) {
      this.xianshidingdan = true;
      this.currentAddress = {
        ...item,
        address: item.province + item.city + item.county + item.addressDetail
      };
    },
    goaway(){
        let waitPay={
            address:this.currentAddress,
            order:this.orderData,
            deepWash:this.checked,
            money:this.checked==false?this.orderData.price:this.orderData.price+29.9
            user:this
        }
        console.log(waitPay)
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

    this.getAddress();
  }
};
</script>

<style scoped>
.zanwudizhi {
  padding: 5vh 30vw;
  text-align: center;
  margin-top: 40vh;
}
.address_main /deep/ .van-field__label {
  display: none;
}
.address_main /deep/.van-button--danger {
  color: #fff;
  background-color: rgb(84, 165, 102);
  border: 1px solid rgb(84, 165, 102);
}
.van-address-item__address {
  color: #999;
}
.van-address-item__name {
  font-size: 14px;
  font-weight: 600;
}
.address_main /deep/.van-tag--round,
.van-tag--round::after {
  border-radius: 0;
}
.address_main /deep/.van-tag--danger {
  background-color: rgb(241, 249, 245);
  color: rgb(84, 165, 102);
}
.address_main /deep/.van-address-item {
  padding-left: 0;
}
.address_main /deep/.van-radio__icon {
  display: none;
}
.zanwudizhi {
  padding: 5vh 30vw;
  text-align: center;
  margin-top: 40vh;
}
.address_main /deep/ .van-field__label {
  display: none;
}
.address_main /deep/.van-button--danger {
  color: #fff;
  background-color: rgb(84, 165, 102);
  border: 1px solid rgb(84, 165, 102);
}
.van-address-item__address {
  color: #999;
}
.van-address-item__name {
  font-size: 14px;
  font-weight: 600;
}
.address_main /deep/.van-tag--round,
.van-tag--round::after {
  border-radius: 0;
}
.address_main /deep/.van-tag--danger {
  background-color: rgb(241, 249, 245);
  color: rgb(84, 165, 102);
}
.address_main /deep/.van-address-item {
  padding-left: 0;
}
.address_main /deep/.van-radio__icon {
  display: none;
}

.orderBot > span {
  color: black;
  font-weight: 600;
  font-size: 14px;
}
.orderBot {
  padding: 1vh 4vw;
  position: absolute;
  bottom: 2vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pay > p {
  font-size: 11px;
  padding-top: 2vh;
}
.pay_item /deep/.van-cell__left-icon > img {
  width: 100%;
  height: 100%;
}
.pay_item /deep/.van-cell__left-icon {
  display: flex;
  align-items: center;
  width: 4vw;
}
.pay_item /deep/ .van-cell {
  width: 90%;
  padding: 0.5vh 0;
}
.pay_item {
  display: flex;
  justify-content: space-between;
}
.pay {
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
.fanhui2 {
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
.confirmOrder {
  position: relative;
  height: 100%;
}
.fuapp {
  height: 100%;
}
div {
  box-sizing: border-box;
}
</style>