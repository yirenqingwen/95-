<template>
  <div class="mySale">
    <!-- 寄售页面 -->
    <div v-if="show" class="consignment">
      <div class="cate_nav">
        <van-icon @click="fanhui" class="fanhui" name="arrow-left" />寄售商品
      </div>
      <div class="consignment_main">
        <van-tabs v-model="active">
          <van-tab title="待发货">
            <!-- <van-empty description="暂无数据" /> -->
          </van-tab>
          <van-tab title="待上架">
            <!-- <van-empty v-if="none" description="暂无数据" />
          <el-card v-for="(item,index) in mywaitPay" :key="index" class="box-card">
            <div @click="gotoOrderDetail(item)" slot="header" class="clearfix">
              <span v-text="item.time"></span>
              <el-button style="float: right; padding: 3px 0;color:black;" type="text">待支付</el-button>
            </div>
            <div @click="gotoOrderDetail(item)" class="text item">
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
                <van-button @click.stop="pay(item._id,'待支付')"  type="primary" size="mini">立即支付</van-button>
              </div>
            </div>
            </el-card>-->
          </van-tab>
          <van-tab title="出售中">
            <!-- <van-empty v-if="none" description="暂无数据" />
          <el-card v-for="(item,index) in mywaitPay" :key="index" class="box-card">
            <div @click="gotoOrderDetail(item)" slot="header" class="clearfix">
              <span v-text="item.time"></span>
              <el-button style="float: right; padding: 3px 0;color:black;" type="text">待收货</el-button>
            </div>
            <div @click="gotoOrderDetail(item)" class="text item">
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
                <van-button @click.stop="pay(item._id,'待收货')"  type="primary" size="mini">确认收货</van-button>
              </div>
            </div>
            </el-card>-->
          </van-tab>
          <van-tab title="已完成">
            <!-- <van-empty v-if="none" description="暂无数据" />
          <el-card v-for="(item,index) in mywaitPay" :key="index" class="box-card">
            <div @click="gotoOrderDetail(item)" slot="header" class="clearfix">
              <span v-text="item.time"></span>
              <el-button style="float: right; padding: 3px 0;color:black;" type="text">已完成</el-button>
            </div>
            <div @click="gotoOrderDetail(item)" class="text item">
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
                <van-button @click.stop="delateOrder(item._id)"  type="primary" size="mini">删除订单</van-button>
              </div>
            </div>
            </el-card>-->
          </van-tab>
        </van-tabs>
      </div>
    </div>

    <!-- 挂售页面？ -->
    <div v-if="!show" class="guashou">
      <div class="cate_nav">
        <van-icon @click="fanhui" class="fanhui" name="arrow-left" />挂售商品
      </div>
      <div class="guashou_main"></div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      show: true,
      active: 0,
      saleData:[],
    };
  },
  watch: {
    active() {
      let status;
      if (this.active == 0) {
        status = "待发货";
      }
      if (this.active == 1) {
        status = "待上架";
      }
      if (this.active == 2) {
        status = "出售中";
      }
      if (this.active == 3) {
        status = "已完成";
      }
      //   查询对应状态的数据
      
    }
  },
  methods: {
    ...mapMutations(["change"]),
    fanhui() {
      this.$router.go(-1);
      this.$store.commit("change", true);
    },
    
  },
  mounted() {
    this.$store.commit("change", false);
    // 判断显示对应界面
    if (this.$route.params.type) {
      window.localStorage.setItem("mySaletype", this.$route.params.type);
      if (this.$route.params.type == "寄售") {
        this.show = true;
      } else {
        this.show = false;
      }
    } else {
      if (window.localStorage.getItem("mySaletype") == "寄售") {
        this.show = true;
      } else {
        this.show = false;
      }
    }
  }
};
</script>

<style scoped>
.consignment_main /deep/ .el-card__header {
  border-bottom: none;
}
.consignment_main /deep/.van-tabs__content {
  padding-top: 2vh;
}
.consignment_main /deep/.van-tabs__line {
  background-color: rgb(84, 165, 102);
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
.mySale {
  width: 100%;
  height: 100%;
}
div {
  box-sizing: border-box;
}
</style>