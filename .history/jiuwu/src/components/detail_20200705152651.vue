<template>
  <div class="detail">
    <div class="detail_nav">
      <span @click="back" class="iconfont icon-arrowLeft-fill"></span>
      <span class="iconfont icon-fenxiang_2"></span>
    </div>
    <div class="lunbo">
      <van-swipe @change="onChange">
        <van-swipe-item v-for="(item,index) in value.detailPic" :key="index">
          <img :src="item" alt />
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/{{maxPage}}</div>
        </template>
      </van-swipe>
    </div>

    <div class="detail_des">
      <div id="desP">
        <div id="jia">
          <div id="fir">￥{{value.price}}</div>
          <div id="sec">
            <p>
              市场价：
              <del>￥{{value.marketPrice}}</del>
            </p>
            <p class="huang">省￥{{value.marketPrice-value.price}}</p>
          </div>
        </div>
        <div id="xiao">
          {{value.perfect}}级成色
          <i @click="yincang2" class="iconfont icon-wenhao"></i>
        </div>
      </div>
      <div class="detail_btn">
        <button>首单包邮</button>
        <button>支持花呗分期</button>
      </div>
      <div class="nick">{{value.size}}码 | {{value.type}}</div>
      <p class="collect">{{value.collect}}人想要</p>
      <div class="zhengpin">
        <img @click="yincang" src="../../public/image/zhengpin.jpg" alt />
      </div>
      <p class="des">
        状况描述
        <span>{{value.description}}</span>
      </p>
    </div>

    <div class="shopStep">
      <h3>购物流程</h3>
      <div class="step">
        <img src="../../public/image/shopStep.jpg" alt />
      </div>
      <h3 class="ok">商品参数</h3>
      <div class="param">
        <div class="par_pic">
          <img :src="value.detailPic[0]" alt />
        </div>
        <div class="par_des">
          <p>{{value.type}}</p>
          <span>
            查看同款
            <van-icon name="arrow" />
          </span>
        </div>
      </div>
      <div class="detail_size">
        <div class="min">尺码</div>
        <div class="max">{{value.size}}码</div>
      </div>
      <div class="detail_size">
        <div class="min">货号</div>
        <div class="max">{{value.huohao}}</div>
      </div>
      <div class="detail_size">
        <div class="min">成色</div>
        <div class="max">{{value.perfect}}级成色</div>
      </div>
    </div>

    <div class="shopDeatail">
      <h3 class="no">商品详情</h3>
      <img v-for="(item,index) in value.detailPic" :key="index" :src="item" alt />

      <p class="tost">温馨提示:因拍照环境的光线，背景灯外在因素的影响，实物颜色可能与照片有微小偏差，请您以实物为准</p>

      <img src="../../public/image/tost.jpg" alt />
    </div>

    <div class="buy">
      <div class="shoucang">
        <van-icon id="star" name="star" />
        <br />收藏
      </div>
      <div class="goumai">
        <div class="p">
          <span class="jiage">￥{{value.price}}</span>
          <br />
          <span class="iconfont icon-shandian"></span>
          <i>闪电直发</i>
        </div>
        <div @click="goumai" class="b">立即购买</div>
      </div>
      <div></div>
    </div>

    <!-- 弹窗 -->
    <van-action-sheet v-model="show" title="平台服务">
      <div class="content">
        <img src="../../public/image/zhengpin_b.jpg" alt />
        <img src="../../public/image/xihu.jpg" alt />
        <img src="../../public/image/ste.jpg" alt />
      </div>
    </van-action-sheet>

    <van-action-sheet v-model="show2" title="成色评级标准">
      <div class="content">
        <img src="../../public/image/perfect.jpg" alt />
        <img src="../../public/image/perfect2.jpg" alt />
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "detail",
  data() {
    return {
      value: {
        detailPic: []
      },
      current: 0,
      maxPage: 0,
      show: false,
      show2: false
    };
  },
  mounted() {
    if (this.$route.params.value) {
      window.localStorage.setItem("detailShopData",JSON.stringify(this.$route.params.value))
      this.value = this.$route.params.value;
    } else {
      this.value=JSON.parse(window.localStorage.getItem("detailShopData"))
    }
    this.maxPage = this.value.detailPic.length;
    console.log(this.value);
    this.$store.commit("change", false);
  },
  methods: {
    ...mapMutations(["change"]),
    onChange(index) {
      this.current = index;
    },
    back() {
      this.$router.go(-1);
      this.$store.commit("change", true);
    },
    yincang() {
      this.show = true;
    },
    yincang2() {
      this.show2 = true;
    },
    goumai() {
      this.$router.push({
        name: "confirmOrder",
        params: { order: this.value }
      });
    }
  }
};
</script>

<style scoped>
.buy{
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fff;
  padding-bottom: 1vh;
}
.content > img {
  width: 100%;
}
.content {
  width: 100%;
  padding: 0.5vh 4vw;
}
.jiage {
  font-size: 14px;
  font-weight: 600;
}
.icon-shandian {
  display: inline-block;
  font-size: 10px !important;
  width: 1.8vw !important;
  margin-right: 1vw;
}
.b {
  width: 60%;
  color: white;
  text-align: center;
  padding: 1vh 0;
}
.p > p {
  display: flex;
  text-align: center;
}
.p {
  width: 40%;
  color: white;
  text-align: center;
  font-size: 10px;
  border-right: 1px solid #ccc;
}
.goumai {
  width: 75%;
  display: flex;
  justify-content: space-between;
  background: rgb(83, 163, 100);
  padding: 1.5vh 0;
  border-radius: 3px;
}
#star {
  font-size: 18px;
}
.shoucang {
  width: 20%;
  text-align: center;
  font-size: 12px;
  color: #999;
}
.buy {
  width: 100%;
  box-sizing: border-box;
  padding: 1vh 4vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tost {
  font-size: 8px;
  color: #999;
  padding: 2vh 0;
}
.shopDeatail > img {
  width: 100%;
  margin-bottom: 0.5vh;
}
.no {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 2vh;
}
.min {
  width: 20%;
  padding: 1vh 0;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  background: rgb(248, 248, 248);
}
.max {
  width: 79%;
  padding: 1vh 8vw;
  background: rgb(248, 248, 248);
  font-size: 12px;
  color: #999;
  display: flex;
  align-items: center;
}
.detail_size {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5vh;
}
.par_des > span {
  display: flex;
  align-items: center;
  color: black;
  font-size: 12px;
  font-weight: 600;
}
.par_des > p {
  font-size: 12px;
  color: #ccc;
  margin-bottom: 2vw;
}
.par_des {
  width: 80%;
  padding-left: 4vw;
}
.par_pic > img {
  width: 100%;
  font-size: 0;
}
.par_pic {
  width: 20%;
}
.param {
  padding: 3vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(248, 248, 248);
  margin-bottom: 1vh;
}
.ok {
  padding: 2vh 0;
}
.step > img {
  width: 100%;
}
.step {
  border-bottom: 1px solid rgb(251, 246, 239);
}
.shopStep > h3 {
  font-size: 14px;
  font-weight: 600;
}
.des > span {
  color: #999;
  font-size: 10px;
  padding-left: 3vw;
}
.des {
  padding: 2vh 0;
  color: #ccc;
  font-size: 10px;
}
.zhengpin > img {
  width: 100%;
}
.collect {
  font-size: 8px;
  color: #ccc;
  padding: 1vh 0;
}
.nick {
  font-size: 12px;
  font-weight: 530;
}
.detail_btn > button {
  border: none;
  padding: 0.5vh 1vw;
  background: rgb(251, 246, 239);
  text-align: center;
  color: rgb(227, 121, 71);
  font-size: 10px;
  margin-right: 1vw;
}
.detail_btn {
  margin: 1vh 0;
}
.icon-wenhao {
  font-size: 14px !important ;
}
#xiao {
  font-size: 12px;
}
.huang {
  color: rgb(227, 121, 71) !important;
}
#sec p {
  font-size: 10px;
  color: #999;
  padding-left: 2vw;
}
#fir {
  font-size: 20px;
  font-weight: 700;
}
#jia {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#desP {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.detail_des,
.shopStep,
.shopDeatail {
  width: 100%;
  padding: 2vh 4vw;
  background: white;
  margin-bottom: 1.5vh;
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
.van-swipe-item > img {
  width: 100%;
  height: 100%;
}
.van-swipe {
  width: 100%;
  height: 100%;
}
.lunbo {
  width: 100%;
  height: 50vh;
  overflow: hidden;
}
.icon-arrowLeft-fill,
.icon-fenxiang_2 {
  font-size: 20px !important;
}
.detail_nav {
  z-index: 999;
  color: white;
  width: 100%;
  background: transparent;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  padding: 2vh 4vw;
}
.detail {
  width: 100%;
  background: rgb(247, 247, 247);
  position: relative;
}

div {
  box-sizing: border-box;
}
</style>