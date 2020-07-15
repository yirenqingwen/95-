<template>
  <div class="login">
    <div class="close">
      <van-icon name="cross" />
    </div>
    <div class="hello">
      <span>Hello</span>
      <p>欢迎来到95分闲置交易平台</p>
    </div>
    <div class="input">
      <van-field @input="shuru" v-model="tel" clearable type="tel" label="+ 86" placeholder="请输入手机号码" />
      <van-cell-group>
        <van-field v-model="sms" center clearable placeholder="请输入短信验证码">
          <template #button>
            <van-button color="white" size="small" type="primary"><span class="sendCode">发送验证码</span></van-button>
          </template>
        </van-field>
      </van-cell-group>
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
    };
  },
  methods: {
    ...mapMutations(["change"]),
    shuru(value){
        let code=document.querySelector(".sendCode")
        if(this.tel.length==0){
            coed
        }else{
            document.querySelector(".sendCode").className="avtive"
        }
    }
  },
  mounted() {
    this.$store.commit("change", false);
  }
};
</script>

<style scoped>
.avtive{
    color: chartreuse;
}
.sendCode{
    color: #999;
}
.input /deep/.van-field__control {
    padding-left: 2vw;
}
.input /deep/ .van-field__label{
    width: 10vw;
    border-right: 1px solid #ccc;
}
.input{
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