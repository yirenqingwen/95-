<template>
  <div id="app">
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  data () {
    return {
       active: 0,
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
      },
    }
  }
}
</script>

<style>

</style>