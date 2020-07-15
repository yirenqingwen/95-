<template>
  <div class="confirmOrder">
    <div class="cate_nav">
      <van-icon @click="fanhui" class="fanhui" name="arrow-left" />确认订单
    </div>
    <div class="shouhuoren">
      <div @click="selectAddress" class="current">
        <div class="icon">
          <van-icon name="location-o" />
        </div>
        <div class="addText">
          <p>
            {{currentAddress.name}}
            <span>{{currentAddress.tel}}</span>
          </p>
          <p>{{currentAddress.address}}</p>
        </div>
        <div class="icon2">
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="line">
          <img src="../../public/image/line.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      currentAddress: {
        
      }
    };
  },
  methods: {
    ...mapMutations(["change"]),
    fanhui() {
      this.$router.go(-1);
      this.$store.commit("change", true);
    },
    selectAddress() {
      this.$router.push({ name: "addressList", params: { order: "order" } });
    }
  },
  mounted() {
    //   查询默认地址
    this.api.getAddressLis({ user: this.$cookies.get("user_id") }).then(res=>{
        res.data.data.forEach(item=>{
            if(item.isDefault==true){
                console.log(item)
                this.currentAddress={
                    ...item,
                    address:item.province+item.city+item.county+item.addressDetail
                }
            }
        })
    })
    // 选择地址
    if (this.$route.params.address) {
      this.currentAddress = this.$route.params.address;
    }
    this.$store.commit("change", false);
  }
};
</script>

<style scoped>
.addText>p>span{
    padding-left: 2vw;
    color: #999;
}
.addText>p:nth-child(1){
    color: black;
    font-weight: 600;
}
.addText>p{
    padding: 1vh 1vw 0;
    color: black;
}
.addText{
    width: 80%;
    text-align: left;
}
.icon2{
    font-size: 20px;
    color: #999;
}
.icon{
    font-size: 28px;
    color: black;
}
.current {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.line>img{
    width: 100%;
}
.line{
    position: absolute;
    width: 100%;
    box-sizing: border-box;
    left: 0;
    bottom: -2vh;
}
.shouhuoren {
position: relative;
  width: 100%;
  box-sizing: border-box;
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