<template>
  <div class="login">
      <div class="close">
          <van-icon name="cross" />
      </div>
      <div class="hello">
          <span>Hello</span>
          <p>欢迎来到95分闲置交易平台</p>
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
.hello>p{
    font-size: 20px;
    color: black;
    font-weight: 500;
}
.hello>span{
    color: black;
    font-size: 40px;
    font-weight: 800;
}
.hello{
    padding: 4vh 0;
}
.close{
    color: #cccccc;
    font-size: 22px;
}
.login{
    padding: 3vh 4vw;
}
</style>