<template>
  <div class="login">
      <div class="close">
          <van-icon name="cross" />
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
}
.login{
    padding: 3vh 4vw;
}
</style>