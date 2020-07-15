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
        <div>
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
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      currentAddress: {
        name: "贾小丽",
        tel: "18336907596",
        address: "天津市天津市北辰区爱上分为范围"
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
    if (this.$route.params.address) {
      this.currentAddress = this.$route.params.address;
    }
    console.log(this.currentContact);
    this.$store.commit("change", false);
  }
};
</script>

<style scoped>
.icon2{
    fon
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
.shouhuoren {
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