<template>
  <div class="notice">
    <div class="cate_nav">
      <van-icon @click="fanhui" class="fanhui" name="arrow-left" />官方通知
    </div>
    <div class="notice_main">
      <div class="notice_item" v-for="(item,index) in noticeData" :key="index">
          <h4 v-text="item.title"></h4>
          <p v-text="item.content"></p>
          <span v-text="item.time"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      noticeData:[],
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
    this.api.getNoticeData().then(res=>{
        this.noticeData=res.data.data
        console.log( this.noticeData)
    })
  }
};
</script>

<style scoped>
.notice_item>h4
.notice_item{
    border-bottom: 1px solid #ccc;
    padding: 1vh 0;
}
.notice_main{
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