<template>
  <div class="zhifubao">
    <div class="cate_nav">
      <van-icon @click="fanhui" class="fanhui" name="arrow-left" />绑定收款账户
    </div>
    <div v-if="none" class="noneInfo">
      <div class="editInfo">
        <h3>收款账户信息</h3>
        <van-field placeholder="请输支付宝账号" v-model="zhifubao" />
        <van-field  placeholder="请输入姓名" v-model="realName" />
      </div>
      <div class="editInfo">
        <h3>发送验证码</h3>
        <van-field @input="input" placeholder="请输入验证码" v-model="sms">
          <template #button>
            <van-button size="small" type="primary">发送验证码</van-button>
          </template>
        </van-field>
      </div>
      <van-button @click="update" :disabled="disable" type="primary" block>认证信息</van-button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      none: true,
      zhifubao: "",
      realName: "",
      sms:"",
      disable: true
    };
  },
  methods: {
    ...mapMutations(["change"]),
    fanhui() {
      this.$router.go(-1);
      this.$store.commit("change", true);
    },
    input(value){
        if(this.sms.length==6){
            this.disable=false
        }else{
            this.disable=true
        }
    },
    update(){
        if(this.zhifubao!)
    }
  },
  mounted() {
    this.$store.commit("change", false);
  }
};
</script>

<style scoped>
.editInfo > h3 {
  font-size: 14px;
  font-weight: 600;
}
.noneInfo /deep/.van-cell {
  padding: 2vh 0;
}
.editInfo {
  padding: 2vh 2vw;
}
.fanhui {
  float: left;
  font-size: 18px;
}
.zhifubao {
  padding: 0 4vw;
}
.cate_nav {
  color: black;
  width: 100%;
  padding: 2vh 2vw;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
}
div {
  box-sizing: border-box;
}
</style>