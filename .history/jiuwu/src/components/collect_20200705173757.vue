<template>
  <div class="collect">
    <div class="cate_nav">
      <van-icon @click="fanhui" class="fanhui" name="arrow-left" />我的收藏
    </div>
    <div class="collect_main">
      <div class="cateItem" @click="gotoDeatil(item)" v-for="(item,index) in cateData" :key="index">
            <div class="cateItem_img">
                <img :src="item.detailPic[0]" alt="">
            </div>
            <div class="cateItem_des">
                <p class="name">{{item.type}}</p>
                <p class="huohao">{{item.huohao}}</p>
                <p class="price">
                    <span id="price">￥{{item.price}}起 <strong>/ 省 {{item.marketPrice-item.price}}</strong> </span>
                    <span id="stock">{{item.stock}}在售</span>
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
      
    };
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
  }
};
</script>

<style scoped>

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