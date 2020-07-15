<template>
  <div class="person">
      <div class="person_nav">
        <div class="settings">
            <van-icon class="set" name="setting-o" /><van-icon name="bell" />
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
.set{
  ma
}
.settings{
  padding: 1.5vh 4vw;
  color: white;
  text-align: right;
  width: 100%;
}
.person_nav{
  width: 100%;
  height: 37vh;
  background: url(../../public/image/person_bg.jpg) center center no-repeat;
  background-size: 100% 100%;
}
div{
  box-sizing: border-box;
}
</style>