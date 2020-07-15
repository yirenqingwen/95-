<template>
  <div class="person">
    <div class="person_nav">
      <div class="settings">
        <van-icon class="set" name="setting-o" />
        <van-icon name="bell" />
      </div>
      <div class="per_login">
        <div class="per_photo">
          <img src="../../public/image/photo.png" alt />
        </div>
        <div class="person_des">
          <span>登录/注册</span>
          <p>点击编辑个人资料</p>
        </div>
      </div>
      <div class="money">
        <div>
          0.00
          <br />
          <span>余额</span>
        </div>
        <div>
          0
          <br />
          <span>优惠券</span>
        </div>
        <div>
          0
          <br />
          <span>收藏</span>
        </div>
        <div>
          0
          <br />
          <span>足迹</span>
        </div>
      </div>
    </div>

    <div class="person_main">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span class="person_h">我的购买</span>
          <el-button style="float: right; padding: 3px 0;color:#ccc;" type="text">查看全部订单<van-icon name="arrow" /></el-button>
        </div>
        <div class="person_buy">
          
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "person"
};
</script>

<style scoped>
.person_buy{
  display: flex;
}
.person_main /deep/.el-card__header{
  border-bottom: none;
}
.person_h{
  color: #333;
  font-size: 14px;
  font-weight: 600;
}
.money > div > span {
  color: #e0e0e0;
  font-weight: normal;
  font-size: 12px;
}
.money > div {
  font-size: 16px;
  color: white;
  text-align: center;
  font-weight: 600;
}
.money {
  margin-top: 5vh;
  padding: 1vh 4vw;
  display: flex;
  justify-content: space-around;
}
.person_des > p {
  font-size: 12px;
  color: #e0e0e0;
  padding: 0.5vh 0;
}
.person_des > span {
  color: #fefefe;
  font-weight: 500;
  font-size: 14px;
}
.per_photo > img {
  width: 100%;
}
.per_photo {
  width: 17vw;
  height: 17vw;
  border: 1px solid #f2f2f2;
  padding: 1px;
  background: #f2f2f2;
  border-radius: 50%;
  margin-right: 4vw;
  overflow: hidden;
}
.per_login {
  display: flex;
  width: 100%;
  justify-content: left;
  align-items: center;
  padding: 0 4vw;
}
.person_des {
  color: white;
}
.set {
  margin-right: 4vw;
}
.settings {
  padding: 1.5vh 4vw;
  color: white;
  text-align: right;
  width: 100%;
  font-size: 18px;
}
.person_nav {
  width: 100%;
  height: 30vh;
  background: url(../../public/image/person_bg.jpg) center center no-repeat;
  background-size: 100% 100%;
}
div {
  box-sizing: border-box;
}
</style>