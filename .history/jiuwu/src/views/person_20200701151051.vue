<template>
  <div class="person">
      <div class=nav">
        <img src="../../public/image/person_bg.jpg" alt=""> 
        <div class="settings">
            <van-icon name="setting-o" /><van-icon name="bell" />
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"person"
}
</script>

<style scoped>
.settings{
  color: white;
  text-align: right;
  width: 100%;
}
.nav>img{
  position: absolute;
  z-index: -1;
  width: 100%;
}
.nav{
  position: relative;
  /* width: 100%;
  height: 40vh;
  background: url(../../public/image/person_bg.jpg) center center no-repeat;
  background-size: 100% 100%; */
}
div{
  box-sizing: border-box;
}
</style>