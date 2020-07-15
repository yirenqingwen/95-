<template>
  <div class="person">
    <div class="person_nav">
      <div class="settings">
        <van-icon class="set" name="setting-o" />
        <van-icon name="bell" />
      </div>
      <div class="per_login">
        <div class="per_photo">
          <img :src="userinfo.photo" alt />
        </div>
        <div class="person_des">
          <span @click="gotoLogin">{{userinfo.name}}</span>
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
          <el-button style="float: right; padding: 3px 0;color:#ccc;" type="text">
            查看全部订单
            <van-icon name="arrow" />
          </el-button>
        </div>
        <div class="person_buy">
          <div class="buy_item">
            <img src="../../public/image/icon_huanjia.jpg" alt />
            <br />还价
          </div>
          <div class="buy_item">
            <img src="../../public/image/icon_pay.jpg" alt />
            <br />待支付
          </div>
          <div class="buy_item">
            <img src="../../public/image/icon_shouhuo.jpg" alt />
            <br />待收货
          </div>
          <div class="buy_item">
            <img src="../../public/image/icon_order.jpg" alt />
            <br />历史交易
          </div>
        </div>
      </el-card>
    </div>
    <!-- 分割线 -->
    
    <div class="person_con">
      <van-cell icon="http://localhost:3000/image/icon_jisale.jpg" title="寄售商品" is-link />
      <van-cell icon="http://localhost:3000/image/icon_guasale.jpg" title="挂售商品" is-link />
    </div>
    <div class="line"></div>
    <div class="tools">
      <h5 class="person_h">工具与服务</h5>
      <div class="tools_main">
        <div class="buy_item mag">
        <img src="../../public/image/icon_address.jpg" alt />
        <br />地址管理
      </div>
      <div class="buy_item mag">
        <img src="../../public/image/icon_kefu.jpg" alt />
        <br />联系客服
      </div>
      <div class="buy_item mag">
        <img src="../../public/image/icon_suggestion.jpg" alt />
        <br />意见反馈
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "person",
  data () {
    return {
      userinfo:{
        name:"登录/注册",
        photo:"http://localhost:3000/photo/default.png",
      }
    }
  },
  methods: {
    gotoLogin(){
      this.$router.push({name:"login"})
    }
  },
  mounted () {
    if(this.$cookies.get("user_id")){
      this.api.searchLoginUser({userId:this.$cookies.get("user_id")}).then(
        (data)=>{
          if(data.data.data.nickName==""){
            this.userinfo={
              name
            }
          }
        }
      )
    }
  }
};
</script>

<style scoped>
.line{
  width: 100%;
  padding: 0.5vh 0;
  background: #f8f8f8;
}
.mag{
  float: left;
  margin-right: 5vw;
}
.tools_main{
  padding-top:2vh  ;
}
.tools {
  padding: 1vh 4vw;
}
.person_con /deep/ img {
  vertical-align: inherit;
}
.person_con /deep/ .van-cell {
  padding: 1vh 0 1vh;
  font-size: 14px;
  font-weight: 540;
}
.person_con {
  padding: 1vh 4vw 0;
}
.buy_item > img {
  width: 60%;
}
.buy_item {
  width: 18%;
  text-align: center;
  color: #333;
  font-size: 12px;
}
.person_buy {
  display: flex;
  justify-content: space-between;
}
.person_main /deep/.el-card__body {
  padding: 1.5vh 4vw;
}
.person_main /deep/.el-card__header {
  border-bottom: none;
  padding: 2vh 4vw 0;
}
.person_h {
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
  position: absolute;
  bottom: 1vh;
  width: 100%;
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
  position: relative;
  width: 100%;
  height: 30vh;
  background: url(../../public/image/person_bg.jpg) center center no-repeat;
  background-size: 100% 100%;
}
div {
  box-sizing: border-box;
}
</style>