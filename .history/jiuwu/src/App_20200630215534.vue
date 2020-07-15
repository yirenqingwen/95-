<template>
  <div id="app">
    <router-view></router-view>
    <div>
      
    </div>
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