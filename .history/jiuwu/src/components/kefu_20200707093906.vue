<template>
  <div class="addressEdit">
    <div class="cate_nav">
      <van-icon @click="fanhui" class="fanhui" name="arrow-left" />客服
    </div>
    <div class="addressEdit_main">
      <iframe width="100%" height="100%" src="https://kefu.easemob.com/webim/im.html?configId=9147d9a0-7ccd-4c7d-9ab1-dd907f85932c" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import chat from '../components/chat.vue'
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
  components: {
    chat
  },
  mounted() {
    this.$store.commit("change", false);
  }
};
</script>

<style scoped>
.addressEdit_main{
  width:100%;
  height: calc(100%-6);
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
}.addressEdit{
  height: 100%;
}
div {
  box-sizing: border-box;
}
</style>