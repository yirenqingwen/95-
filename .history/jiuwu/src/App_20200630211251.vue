<template>
  <div id="app">
    <router-view/>
    <van-tabbar v-model="active">
  <van-tabbar-item badge="3">
    <span>自定义</span>
    <template #icon="props">
      <img :src="props.active ? icon.active : icon.inactive" />
    </template>
  </van-tabbar-item>
  <van-tabbar-item icon="search">标签</van-tabbar-item>
  <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
</van-tabbar>
  </div>
</template>
   <script>
    export default {
         data(){
             return{
                 
             }
         },
    }
</script>
<style>
   #app{
     padding-bottom: 50px;
   }
</style>
