<template>
  <div class="myBuy">
    <div class="cate_nav">
      <van-icon @click="fanhui" class="fanhui" name="arrow-left" />我的购买
    </div>
    <div class="myBuy_main">
      <van-tabs v-model="active">
        <van-tab title="还价">
          <p>暂无数据</p>
        </van-tab>
        <van-tab title="待支付">
          <el-card v-for="(item,index) in mywaitPay" :key="index" class="box-card">
            <div slot="header" class="clearfix">
              <span v-text="item.time"></span>
              <el-button style="float: right; padding: 3px 0;color:black;" type="text">待支付</el-button>
            </div>
            <div class="text item">
              <div class="cateItem">
                <div class="cateItem_img">
                  <img :src="item.order.detailPic[0]" alt />
                </div>
                <div class="cateItem_des">
                  <p class="name">{{item.order.type}}</p>
                  <p class="huohao">{{item.order.huohao}}</p>
                  <p class="price">
                    <span id="price">￥{{item.money}}</span>
                  </p>
                </div>
              </div>
              <div class="awPay">
                <van-button @click="pay(item._id)"  type="primary" size="mini">立即支付</van-button>
              </div>
            </div>
          </el-card>
        </van-tab>
        <van-tab title="待收货">
          <p>暂无数据</p>
        </van-tab>
        <van-tab title="历史交易">
          <p>暂无数据</p>
        </van-tab>
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
      mywaitPay: []
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
    },
    pay(data){
      console.log(data)
      this.api.pay({id:data}).then(res=>{
        if(res.data.msg=="支付成功"){
          this.active=2
        }
      })
    }
  },
  watch: {
    active() {
      if (this.active != 0) {
        let status
        if(this.active==1){status=}
        this.api.mywaitPay({ user: this.$cookies.get("user_id"),status:status }).then(res => {
          this.mywaitPay = res.data.data;
          console.log(this.mywaitPay);
        });
      }
    }
  }
};
</script>

<style scoped>
/* 待支付样式 */
.awPay{
  width: 100%;
  text-align: right;
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
  margin-bottom: 0;
  padding-bottom: 1vh;
}

/* card样式 */
.myBuy_main /deep/ .el-card__header {
  border-bottom: none;
}
.myBuy_main /deep/.el-card__body {
  padding: 1vh 2vw 0;
}
.myBuy_main /deep/ .el-card__header {
  padding: 1vh 2vw 0;
}
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 1vh;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.box-card {
  width: 100%;
  margin-bottom: 1vh;
}
/* card样式 */
/* 待支付样式 */
.myBuy_main /deep/.van-tabs__content {
  padding-top: 2vh;
}
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