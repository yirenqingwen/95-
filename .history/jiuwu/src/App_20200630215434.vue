<template>
  <div id="app">
    <router-view></router-view>
    <van-tabbar inactive-color="#333" v-model="active">
      <van-tabbar-item>
        <span>95分</span>
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>出售</span>
        <template #icon="props">
          <img :src="props.active ? icon2.active : icon2.inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>我的</span>
        <template #icon="props">
          <img :src="props.active ? icon3.active : icon3.inactive" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      icon: {
        active: "http://localhost:3000/image/icon/icon_home_select.jpg",
        inactive: "http://localhost:3000/image/icon/icon_home.jpg"
      },
      icon2: {
        active: "http://localhost:3000/image/icon/buy.jpg",
        inactive: "http://localhost:3000/image/icon/buy.jpg"
      },
      icon3: {
        active: "http://localhost:3000/image/icon/icon1_person_select.jpg",
        inactive: "http://localhost:3000/image/icon/icon_person.jpg"
      }
    };
  }
};
</script>

<style>
</style>