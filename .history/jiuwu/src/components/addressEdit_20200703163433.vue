<template>
  <div class="addressEdit">
    <div class="cate_nav">
      <van-icon class="fanhui" @click="fanhui" name="arrow-left" />span
      <span>删除地址</span>
    </div>
    <div class="addressEdit_main">
      
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
  font-size: 18px;
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