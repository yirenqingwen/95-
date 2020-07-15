<template>
  <div class="login">
1
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

</style>