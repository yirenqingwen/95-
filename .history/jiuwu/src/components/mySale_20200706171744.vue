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
            <div class="tishi">
              <van-cell title="提醒：请使用「顺丰寄付」发货，并使用纸箱加固" is-link />
            </div>
            <van-empty v-if="noneData" description="暂无数据" />
            <el-card v-for="(item,index) in saleData" :key="index" class="box-card">
              <div @click="gotoSaleDetail(item)" slot="header" class="clearfix">
                <span>寄售单号：{{item._id}}</span>
                <el-button style="float: right; padding: 3px 0;color:black;" type="text">
                  <van-icon @click.stop="showDelate" name="ellipsis" />
                </el-button>
              </div>
              <div @click="gotoSaleDetail(item)" class="text item">
                <div class="cateItem">
                  <div class="cateItem_img">
                    <img :src="item.detailPic[0]" alt />
                  </div>
                  <div class="cateItem_des">
                    <p class="name">{{item.type}}</p>
                    <p class="huohao">{{item.huohao}}</p>
                  </div>
                </div>
                <div class="awPay">
                  <van-button @click.stop="updateSaleStatus(item._id,'待发货')" type="primary" size="mini">立即发货</van-button>
                </div>
              </div>
            </el-card>
          </van-tab>
          <van-tab title="待上架">
            <van-empty v-if="noneData" description="暂无数据" />
            <el-card v-for="(item,index) in saleData" :key="index" class="box-card">
              <div @click="gotoSaleDetail(item)" slot="header" class="clearfix">
                <span>寄售单号：{{item._id}}</span>
                <el-button style="float: right; padding: 3px 0;color:black;" type="text">
                  <van-icon @click.stop="showDelate" name="ellipsis" />
                </el-button>
              </div>
              <div @click="gotoSaleDetail(item)" class="text item">
                <div class="cateItem">
                  <div class="cateItem_img">
                    <img :src="item.detailPic[0]" alt />
                  </div>
                  <div class="cateItem_des">
                    <p class="name">{{item.type}}</p>
                    <p class="huohao">{{item.huohao}}</p>
                  </div>
                </div>
                <div class="awPay">
                  <van-button @click.stop="updateSaleStatus(item._id,'待上架')" type="primary" size="mini">上架</van-button>
                </div>
              </div>
            </el-card>
          </van-tab>
          <van-tab title="出售中">
            <van-empty v-if="noneData" description="暂无数据" />
            <el-card v-for="(item,index) in saleData" :key="index" class="box-card">
              <div @click="gotoSaleDetail(item)" slot="header" class="clearfix">
                <span>寄售单号：{{item._id}}</span>
                <el-button style="float: right; padding: 3px 0;color:black;" type="text">
                  <van-icon @click.stop="showDelate" name="ellipsis" />
                </el-button>
              </div>
              <div @click="gotoSaleDetail(item)" class="text item">
                <div class="cateItem">
                  <div class="cateItem_img">
                    <img :src="item.detailPic[0]" alt />
                  </div>
                  <div class="cateItem_des">
                    <p class="name">{{item.type}}</p>
                    <p class="huohao">{{item.huohao}}</p>
                  </div>
                </div>
                <div class="awPay">
                  <van-button @click.stop="updateSaleStatus(item._id,'出售中')" type="primary" size="mini">交易完成</van-button>
                </div>
              </div>
            </el-card>
          </van-tab>
          <van-tab title="已完成">
            <van-empty v-if="noneData" description="暂无数据" />
            <el-card v-for="(item,index) in saleData" :key="index" class="box-card">
              <div @click="gotoSaleDetail(item)" slot="header" class="clearfix">
                <span>寄售单号：{{item._id}}</span>
                <el-button style="float: right; padding: 3px 0;color:black;" type="text">
                  <van-icon @click.stop="showDelate" name="ellipsis" />
                </el-button>
              </div>
              <div @click="gotoSaleDetail(item)" class="text item">
                <div class="cateItem">
                  <div class="cateItem_img">
                    <img :src="item.detailPic[0]" alt />
                  </div>
                  <div class="cateItem_des">
                    <p class="name">{{item.type}}</p>
                    <p class="huohao">{{item.huohao}}</p>
                  </div>
                </div>
              </div>
            </el-card>
          </van-tab>
        </van-tabs>
      </div>
    </div>

    <!-- 挂售页面？ -->
    <div v-if="!show" class="guashou">
      <div class="cate_nav">
        <van-icon @click="fanhui" class="fanhui" name="arrow-left" />挂售商品
      </div>
      <div class="guashou_main">

      </div>
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
      saleData: [],
      status: "待发货",
      noneData: false,
      checked: false,
    };
  },
  watch: {
    active() {
      if (this.active == 0) {
        this.status = "待发货";
      }
      if (this.active == 1) {
        this.status = "待上架";
      }
      if (this.active == 2) {
        this.status = "出售中";
      }
      if (this.active == 3) {
        this.status = "已完成";
      }
      //   查询对应状态的数据
      this.findSaleData();
    }
  },
  methods: {
    ...mapMutations(["change"]),
    fanhui() {
      this.$router.go(-1);
      this.$store.commit("change", true);
    },
    findSaleData() {
      this.saleData = [];
      this.api
        .getSaleData({
          user: this.$cookies.get("user_id"),
          status: this.status,
          saleType:,
        })
        .then(res => {
          if (res.data.msg) {
            this.noneData = true;
          } else {
            this.noneData = false;
            this.saleData = res.data.data;
          }
          console.log(this.saleData);
        });
    },
    gotoSaleDetail(data) {
      this.$router.push({ name: "saleDetail", params: { data: data } });
    },
    updateSaleStatus(data1,data2) {
        this.api.updateSaleData({id:data1,nowStatus:data2}).then(
            res=>{
                if(res.data.msg=="操作成功"){
                    this.active++
                }
            }
        )
    }
  },
  mounted() {
    this.$store.commit("change", false);
    // 判断显示对应界面
    let param
    if (this.$route.params.type) {
      window.localStorage.setItem("mySaletype", this.$route.params.type);
      if (this.$route.params.type == "寄售") {
        this.show = true;
        param="寄售"
      } else {
        this.show = false;
        param
      }
      this.getSaleData(param)
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
.awPay {
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
  width: 80%;
}
.cateItem_img {
  text-align: center;
  vertical-align: initial;
  width: 25%;
}
.cateItem {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0;
  padding-bottom: 1vh;
}
.consignment_main /deep/.el-card__body {
  padding: 1.5vh 2vw 1vh;
}
.consignment_main /deep/ .el-card__header {
  padding: 1vh 2vw 0;
  border-bottom: none;
}
.consignment_main /deep/.van-tabs__content {
  padding-top: 2vh;
}
.consignment_main /deep/.van-tabs__line {
  background-color: rgb(84, 165, 102);
}
.consignment_main /deep/.van-cell {
  padding: 1vh 0 2vh;
}
.consignment_main /deep/.el-card {
  margin-bottom: 1vh;
}
.consignment_main {
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
.mySale {
  width: 100%;
  /* height: 100%; */
}
div {
  box-sizing: border-box;
}
</style>