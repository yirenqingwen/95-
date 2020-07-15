<template>
  <div class="person">
      <div class="person_nav">
        <div class="settings">
            <van-icon class="set" name="setting-o" /><van-icon name="bell" />
        </div>
        <div class="per_login">
          <div class="per_photo">
            <img src="../../public/image/photo.png" alt="">
          </div>
          <div class="person_des">
            <span>登录/注册</span>
            <p>点击编辑个人资料</p>
          </div>
        </div>
        <div class="money">
          <div>
            0.00 <br>余额
          </div>
          <div>
            0 <br>优惠券
          </div>
          <div>
            0 <br>收藏
          </div>
          <div>
            0 <br>足迹
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
.money{
  padding: 1vh 4vw;
}
.person_des>p{
  font-size: 12px;
  color: #e0e0e0;
  padding: 0.5vh 0;
}
.person_des>span{
  color: #fefefe;
  font-weight: 500;
  font-size: 14px;
}
.per_photo>img{
  width: 100%;
}
.per_photo{
  width: 17vw;
  height: 17vw;
  border: 1px solid #f2f2f2;
  padding: 1px;
  background: #f2f2f2;
  border-radius: 50%;
  margin-right: 4vw;
  overflow: hidden;
}
.per_login{
  display: flex;
  width: 100%;
  justify-content: left;
  align-items: center;padding: 0 4vw;
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