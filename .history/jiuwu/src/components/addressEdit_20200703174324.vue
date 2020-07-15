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
      <van-field @focus="editfocus" v-model="provience" placeholder="请选择地址" />
      <van-field v-model="detailAddress" rows="2" type="textarea" placeholder="请输入详细地址" />
      <van-cell-group>
        <van-switch-cell v-model="checked" title="设为默认地址" />
      </van-cell-group>
    </div>
    <div class="addressEdit_btn">
        <van-button type="primary" block>确认修改</van-button>
    </div>
    <van-area class="select_provience" @confirm="" v-if="dizhishow" :area-list="areaList" />
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
      tel: "",
      provience: "",
      detailAddress: "",
      checked:""
    };
  },
  methods: {
    ...mapMutations(["change"]),
    fanhui() {
      this.$router.go(-1);
      this.$store.commit("change", true);
    },
    editfocus(){
        this.dizhishow=true
    },
    delate() {}
  },
  mounted() {
    this.$store.commit("change", false);
    this.address = this.$route.params.address;
    console.log(this.address);
    this.name = this.address.name;
    this.tel=this.address.tel
    this.provience=this.address.province + this.address.city + this.address.county
    this.detailAddress=this.address.addressDetail
    this.checked=this.address.isDefault
  }
};
</script>

<style scoped>
.select_provience{
    position: absolute;
    bottom: 0;
    width: 100%;
}
.addressEdit_btn{
    position: absolute;
    width: 100%;
    padding: 2vh 4vw;
    background: #fff;
    bottom: 2vh;
}
.addressEdit_main /deep/.van-switch--on{
    background: rgb(84, 165, 102);
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
.addressEdit{
    height: 100%;
    position: relative;
}
div {
  box-sizing: border-box;
}
</style>