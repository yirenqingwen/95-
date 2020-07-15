<template>
  <div class="footprint">
    <div class="cate_nav">
      <van-icon class="fanhui" @click="fanhui" name="arrow-left" />
      <span>历史足迹</span>
      <span class="delate" @click="delate">清空</span>
    </div>
    <div class="footprint_main">
        <div class="everyDay" v-for="(item,index) in footprintData" :>

        </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
        footprintData:[],
    };
  },
  methods: {
    ...mapMutations(["change"]),
    fanhui() {
      this.$router.go(-1);
      this.$store.commit("change", true);
    },
    delate() {}
  },
  mounted() {
    this.$store.commit("change", false);
    // 获取用户浏览记录
    this.api
      .getfootprintCount({ user: this.$cookies.get("user_id"), data: true })
      .then(result => {
        let tmp = [...result.data.data];
        // 对象数组筛选
        let res = [];
        while (tmp.length !== 0) {
          let list = tmp.shift();
          let arr = [list];
          for (let i = 0; i < tmp.length; i++) {
            if (tmp[i].time === list.time) {
              arr = arr.concat(tmp.splice(i, 1));
              i--;
            }
          }
          res.push(arr);
        }
        // 对象数组筛选
        this.footprintData=res.reverse()
        console.log(this.footprintData)
      });
      
  }
};
</script>

<style scoped>
.footprint_main{
    padding: 1vh 4vw;
}
.delate {
  font-weight: normal;
  font-size: 14px;
}
.fanhui {
  font-size: 18px;
  width: 50px;
  text-align: left;
}
.cate_nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  width: 100%;
  padding: 2vh 2vw;
  font-size: 16px;
  font-weight: 600;
}
.footprint {
  height: 100%;
  position: relative;
}
div {
  box-sizing: border-box;
}
</style>