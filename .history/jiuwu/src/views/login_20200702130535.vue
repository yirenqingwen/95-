<template>
  <div class="login">
    <div class="close">
      <van-icon @click="fanhui" name="cross" />
    </div>
    <div class="hello">
      <span>Hello</span>
      <p>欢迎来到95分闲置交易平台</p>
    </div>
    <!-- 输入手机号 -->
    <div class="input">
      <van-field
        @input="shuru"
        v-model="tel"
        clearable
        type="tel"
        label="+ 86"
        placeholder="请输入手机号码"
      />
      <van-cell-group>
        <van-field @input="inputSms" v-model="sms" center clearable placeholder="请输入短信验证码">
          <template #button>
            <van-button
              @click="sendcode"
              :disabled="codejinyong"
              color="white"
              size="small"
              type="primary"
            >
              <span ref="code" class="sendCode" v-text="text"></span>
            </van-button>
          </template>
        </van-field>
      </van-cell-group>
    </div>
    <!-- 登录按钮 -->
    <div class="login_btn">
      <van-button @click="login" type="primary" :disabled="disable" block>登录</van-button>
      <br />
      <van-button @click="zhezhaoceng" color="white" size="small" type="primary">
        <span class="sendCode">收不到验证码？</span>
      </van-button>
    </div>
    <!-- 遮罩层 -->
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper" @click.stop>
        <div class="block">
            <h4>收不到验证码？</h4>
            <p>若收不到验证码，请尝试以下解决方式：</p>
            <ul>
                <li>1.请检查是否输入正确的手机号码</li>
                <li>2.请检查手机是否停机</li>
                <li>3.请使用其他账号登录</li>
                <li>4.请联系官方客服</li>
            </ul>
            <van-button @click="zhezhaoceng" type="primary" block>我知道了</van-button>
        </div>
      </div>
    </van-overlay>

    <div class="wechatLogin">
        <van-divider>第三方账号登录</van-divider>
        <i class="iconfont icon-weixindenglu"></i>
        <p>登录既同意<a href="">用户协议</a>及<a href="">隐私政策</a><br>首次登录将自动注册</p>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "login",
  data() {
    return {
      sms: "",
      tel: "",
      disable: true,
      text: "发送验证码",
      codejinyong: false,
      show:false,
    };
  },
  methods: {
    ...mapMutations(["change"]),
    shuru(value) {
      if (this.tel.length == 0) {
        this.$refs.code.className = "sendCode";
      } else {
        this.$refs.code.className = "avtive";
      }
    },
    inputSms() {
      if (this.sms.length == 6) {
        this.disable = false;
      }
    },
    sendcode() {
      if (this.tel.length != 11) {
        this.$toast("请输入正确的手机号码");
        return;
      }
      this.codejinyong = true;
      let time = 60;
      let timer = setInterval(() => {
        this.text = time + "s后重新发送";
        time--;
        if (time == -1) {
          this.codejinyong = false;
          clearInterval(timer);
          this.text = "发送验证码";
        }
      }, 1000);
      this.api.getsms({phoneumber:this.tel}).then((res)=>{
        console.log(res)
        if(res.data.msg=="发送成功"){
          window.localStorage.setItem("sendSmsPhone",this.tel)
          this.$toast("验证码已发送，请注意查收")
        }
      })
    },
    zhezhaoceng(){
        this.show=!this.show
    },
    fanhui(){
        this.$router.go(-1)
        this.$store.commit("change", true);
    },
    login(){
      if(this.tel==window.localStorage.getItem("sendSmsPhone")){
        this.api.login({code:this.sms,tel:this.tel}).then((res)=>{
        console.log(res)
        if(res.data.msg=="登录成功"){
          this.$router.go(-1)
        }
      })
      }
      
    }
  },
  mounted() {
    this.$store.commit("change", false);
  }
};
</script>

<style scoped>
.wechatLogin /deep/.van-divider {
    margin-bottom: 0;
}
.icon-weixindenglu{
    color: #53a364;
    font-size: 40px !important;
}
.wechatLogin>p>a{
    color: #53a364;
}
.wechatLogin>p{
    color: #999;
    font-size: 12px;
}
.wechatLogin{
    position: fixed;
    bottom: 8vh;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    left: 0;
}
.block>ul>li{
    color: #999;
    font-size: 13px;
}
.block>p{
    color: #999;
    padding: 0.5vh 0;
}
.block>h4{
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    padding: 1vh 0;
}
 .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .block {
    padding: 2vh;
    background-color: #fff;
  }
.login_btn {
  padding: 2vh 0;
  text-align: center;
}
.avtive {
  color: #53a364;
}
.sendCode {
  color: #999;
}
.input /deep/.van-field__control {
  padding-left: 2vw;
}
.input /deep/ .van-field__label {
  width: 10vw;
  border-right: 1px solid #ccc;
}
.input {
  padding: 3vh 0;
}
.hello > p {
  font-size: 20px;
  color: black;
  font-weight: 600;
}
.hello > span {
  color: black;
  font-size: 40px;
  font-weight: 700;
}
.hello {
  padding: 4vh 0;
}
.close {
  color: #cccccc;
  font-size: 22px;
}
.login {
  padding: 3vh 4vw;
}

</style>