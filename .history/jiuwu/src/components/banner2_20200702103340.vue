<template>
  <div class="banner">
      <div class="cate_nav">
      <van-icon @click="fanhui" class="fanhui" name="arrow-left" />最新降价
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
    }
}
</script>

<style>

</style>