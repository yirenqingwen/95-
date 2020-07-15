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
      cateData:[],
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
    // 请求收藏数据
    this.api.selectCollect({user:this.$cookies.get("user_id"),data:true}).then(
        res=>{
            res.data.data.forEach(item=>{
                this.cateData.push(item.shangpin)
            })
            console.log()
        }
    )
  }
};
</script>

<style scoped>
#price>strong{
    font-weight: normal;
    font-size: 11px;
    color: #ccc;
}
#price{
    font-size: 12px;
    font-weight: 600;
}
.price{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.huohao{
    font-size: 10px;
    color: #ccc;
}
.name{
    font-size: 13px;
    color: black;
}
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
        border-bottom: 1px solid #ccc;
        margin-bottom: 1vh;
        padding-bottom: 1vh;
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