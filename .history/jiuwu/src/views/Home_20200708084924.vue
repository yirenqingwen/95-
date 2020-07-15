<template>
  <div class="home">
    <!-- 导航 -->
    <div class="nav">
      <div class="search" @click="gotoSearch">
        <van-search v-model="value" placeholder="搜索商品名称或者货号" />
      </div>
      <div class="icon">
        <van-icon  name="bell" />
      </div>
    </div>
    <!-- banner -->
    <div class="banner">
      <van-swipe :show-indicators="false" class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item class="banItem" v-for="(item,index) in bannerData" :key="index">
          <img @click="go(item.id)" :src="item.picurl" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="buyStep">
      <div class="firstStep">
        <span class="stepIcon">
          <van-icon name="gold-coin" />
        </span>
        <span>
          <h5>下单购买</h5>卖家发货至平台
        </span>
        <span style="color:#333;">
          <van-icon name="play" />
        </span>
      </div>
      <div class="firstStep">
        <span class="stepIcon">
          <van-icon name="question" />
        </span>
        <span>
          <h5>平台实物鉴别</h5>商品逐件查验
        </span>
        <span style="color:#333;">
          <van-icon name="play" />
        </span>
      </div>
      <div class="firstStep">
        <span class="stepIcon">
          <van-icon name="checked" />
        </span>
        <span>
          <h5>鉴别为真</h5>平台发货
        </span>
      </div>
    </div>
    <!-- 分类 -->
    <div class="cate">
      <div
        @click="fenlei(item.cateName)"
        class="cateItem"
        v-for="(item,index) in cateData"
        :key="index"
      >
        <img :src="item.picurl" alt />
        <span v-text="item.cateName"></span>
      </div>
    </div>
    <!-- 展示 -->
    <div class="show">
      <div>
        <show></show>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import show from "../components/show";
export default {
  name: "Home",
  data() {
    return {
      value: "",
      bannerData: [],
      cateData: [],
      
    };
  },
  components: {
    show
  },
  mounted() {
    this.api.getBannerData().then(res => {
      // console.log(res)
      this.bannerData = res.data.data;
      // console.log(this.bannerData);
    });
    this.api.getCateData().then(res => {
      this.cateData = res.data.data;
      // console.log(this.cateData);
    });
  },
  methods: {
    fenlei(data) {
      if (data == "降价专区") {
        this.$router.push({ name: "markdown" });
      } else {
        this.$router.push({ name: "cateCom", params: { cateName: data } });
      }
    },
    gotoSearch() {
      this.$router.push({ name: "search" });
    },
    go(id) {
      if(id==1){
        this.$router.push({name:"banner1"})
      }
      if(id==2){
        this.$router.push({name:"banner2"})
      }
      if(id==3){
        this.$router.push({name:"banner3"})
      }
    },
    gotoNotice(){
      this.$router.push({name:"notice"})
    }
  }
};
</script>
<style scoped>
.cateItem > img {
  width: 90%;
}
.cateItem {
  text-align: center;
  width: 20vw;
  font-size: 10px;
  font-weight: 700;
  margin-bottom: 0.8vh;
}
.cate {
  width: 100%;
  box-sizing: border-box;
  padding: 0.8vh 1vw;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.buyStep {
  display: flex;
  background: rgb(245, 245, 245);
  box-sizing: border-box;
  padding: 0.8vh 0;
  justify-content: space-around;
}
.firstStep .stepIcon {
  color: rgb(191, 191, 191);
  font-size: 16px;
}
.firstStep > span > h5 {
  font-size: 11px;
  color: black;
  font-weight: normal;
}
.firstStep > span {
  display: block;
  font-size: 9px;
  margin-right: 2vw;
  color: #999;
}
.firstStep {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.banItem img {
  width: 100%;
  height: 100%;
}
.banner {
  width: 100%;
  overflow: hidden;
  margin-top: 54px;
  font-size: 0;
}
.icon {
  font-size: 24px;
  display: flex;
  align-items: center;
}
.search {
  width: 95%;
}
.van-search {
  background: transparent !important;
  padding: 0 !important;
}
.nav {
  width: 100%;
  display: flex;
  justify-content: space-around;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background: #fff;
}
.home {
  width: 100%;
}
</style>