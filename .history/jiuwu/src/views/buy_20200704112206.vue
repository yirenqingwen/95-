<template>
  <div class="buy">
    <div class="cate_nav">
      <van-icon @click="fanhui" class="fanhui" name="arrow-left" />出售商品
    </div>
    <div class="buy_ban">
      <img src="../../public/image/buy_ban.jpg" alt />
    </div>
    <div class="cont">
      <van-tabs swipeable animated title-active-color="#53a364" v-model="active">
        <van-tab title="我要寄售">
          <img src="../../public/image/jishou.jpg" alt />
          <div class="wenxintishi">
            想了解更多？
            <span>查看寄售服务>></span>
          </div>
          <van-button @click="gotosale('寄售')" class="t" type="primary" block>自主寄售</van-button>
        </van-tab>
        <van-tab title="我要挂售">
          <img src="../../public/image/guashou.jpg" alt />
          <div class="wenxintishi">
            想了解更多？
            <span>查看挂售服务>></span>
          </div>
          <van-button @click="gotosale('挂售')" class="t" type="primary" block>自主挂售</van-button>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "buy",
  data() {
    return {
      active: 0
    };
  },
  methods: {
    ...mapMutations(["change"]),
    fanhui() {
      this.$router.go(-1);
      this.$store.commit("change", true);
    },
    gotosale(data) {
      if(this.$)
      this.$router.push({ name: "sale", params: { type: data } });
    }
  },
  mounted() {
    if (
      window.localStorage.getItem("saletype") &&
      window.localStorage.getItem("saletype") == "挂售"
    ) {
      this.active = 1;
    }else{
        this.active=0;
    }

    this.$store.commit("change", false);
  }
};
</script>

<style scoped>
.t {
 
  margin-top: 2vh;
}
.wenxintishi > span {
  color: #53a364;
}
.wenxintishi {
  padding: 1vh 0;
  text-align: center;
  font-size: 10px;
  color: #999;
  border-top: 1px solid #f4f4f4;
  border-bottom: 1px solid #f4f4f4;
}
.cont /deep/.van-tabs__line {
  background-color: #53a364;
}
.van-tab__pane > img {
  width: 100%;
}
.cont {
  padding: 0vh 5vw;
  margin-bottom: -40px;
}
.buy_ban > img {
  width: 100%;
}
.buy_ban {
  width: 100%;
}
.fanhui {
  float: left;
  font-size: 18px;
}
.cate_nav {
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