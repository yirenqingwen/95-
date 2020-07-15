<template>
  <div class="login">
      
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
.login{
    padding: 2vh 4vw;
}
</style>