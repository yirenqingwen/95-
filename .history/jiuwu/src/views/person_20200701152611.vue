<template>
  <div class="person">
      <div class="person_nav">
        <div class="settings">
            <van-icon class="set" name="setting-o" /><van-icon name="bell" />
        </div>
        <div class="per_login">
          <div class="per_photo">

          </div>
          <div class="person_des">
            <span>登录/注册</span>
            <p>点击编辑个人资料</p>
          </div>
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
.per_photo{
  width: 20vw;
  height: 40vw;
  border: 1px solid #fff;
  padding: 1px;
  background: #fff;
  border-radius: 50%;
}
.per_login{
  display: flex;
  width: 100%;
  justify-content: left;
}
.person_des{
  color: white;
}
.set{
  margin-right: 4vw;
}
.settings{
  padding: 1.5vh 4vw;
  color: white;
  text-align: right;
  width: 100%;
  font-size: 18px;
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