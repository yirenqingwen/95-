<template>
  <div class="confirmOrder">
    <div class="cate_nav">
      <van-icon @click="fanhui" class="fanhui" name="arrow-left" />确认订单
    </div>
    <div class>
      <van-contact-card
        :name="currentContact.name"
        :tel="currentContact.tel"
        @click="showList"
        add-text="点击添加收货信息"
        show-set-default="true"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
        currentContact:{
            name:"",
            tel:"",
        },
    };
  },
  methods: {
    ...mapMutations(["change"]),
    fanhui() {
      this.$router.go(-1);
      this.$store.commit("change", true);
    },
    showList(){

    }

  },
  mounted() {
    this.$store.commit("change", false);
    console.log(this.$route.params.order);
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