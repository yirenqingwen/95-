<template>
  <div class="addressEdit">
    <div class="cate_nav">
      <van-icon class="fanhui" @click="fanhui" name="arrow-left" />
      <span>修改地址</span>
      <span class="delate" @click="delate">删除地址</span>
    </div>
    <div class="addressEdit_main">
      <van-field v-model="name" placeholder="请输入收货人姓名" />
      <van-field v-model="tel" placeholder="请输入电话" />
      <van-field v-model="address" placeholder="" />
      <van-field v-model="detailAddress" placeholder="请输入用户名" />
    </div>
    <van-area v-if="dizhishow" :area-list="areaList" value="110101" />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import area from "../../area/areaList.js";
export default {
  data() {
    return {
      dizhishow: false,
      areaList: area,
      address: {},
      name: "",
      tel:"",
      address:"",
      detailAddress:"",
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
    this.address = this.$route.params.address;
    this.value = this.address.name;
    console.log(this.address);
  }
};
</script>

<style scoped>
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
div {
  box-sizing: border-box;
}
</style>