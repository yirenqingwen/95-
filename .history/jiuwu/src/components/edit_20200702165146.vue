<template>
  <div class="edit">
      <div class="cate_nav">
      <van-icon @click="fanhui" class="fanhui" name="arrow-left" />个人资料
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            
        }
    },
    methods: {
        ...mapMutations(["change"]),
        fanhui() {
      this.$router.go(-1);
      this.$store.commit("change", true);
    },
    }
}
</script>

<style scoped>
.fanhui {
  float: left;
  font-size: 18px;
}
.cate_nav {
  width: 100%;
  padding: 2vh 2vw;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
}
</style>