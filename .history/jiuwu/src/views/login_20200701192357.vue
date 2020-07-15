<template>
  <div class="login">
      <div class="close">
          <van-icon name="cross" />
      </div>
      <div class="hello">
          <span>Hello</span>
          <p>欢迎来到95分闲置</p>
      </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
    name:"login",
    methods: {
        ...mapMutations(["change"]),
    },
    mounted () {
        this.$store.commit("change", false);
    }
}
</script>

<style>
.close{
    color: #cccccc;
    font-size: 22px;
}
.login{
    padding: 3vh 4vw;
}
</style>