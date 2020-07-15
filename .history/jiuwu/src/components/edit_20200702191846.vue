<template>
  <div class="edit">
    <div class="cate_nav">
      <van-icon @click="fanhui" class="fanhui" name="arrow-left" />个人资料
    </div>
    <div class="edit_main">
        <div class="edit_photo">
            <div class="UParea" ref="up"><van-uploader :after-read="readed"  v-model="fileList" multiple :max-count="1" /></div>
            <img :src="loginUser.photo" alt="">
        </div>
        <div class="edit_nick">
            <h3>我的昵称</h3>
            <van-field right-icon="edit" v-model="nick" />
        </div>
        <div class="edit_nick">
            <h3>绑定手机号</h3>
            <van-field right-icon="edit" v-model="tel" />
        </div>
        <br><br>
        <van-button type="primary" @click="save" block>保存</van-button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
        nick:"",
        tel:"",
        loginUser:{},
        fileList:[]
    };
  },
  methods: {
    ...mapMutations(["change"]),
    fanhui() {
      this.$router.go(-1);
      this.$store.commit("change", true);
    },
    readed(){
        console.log(this.$refs.up)
        this.$refs.up.className=" show"
    },
    save(){

    }
  },
  mounted() {
    this.api
      .searchLoginUser({ userId: this.$cookies.get("user_id") })
      .then(data => {
        console.log(data);
        let login = data.data.data;
        if (login.nickName == "") {
          this.loginUser = {
            nickName: "95_" + login._id,
            photo: login.photo,
            phone: login.phone,
            realName: login.realName,
            zhifubao: login.zhifubao
          };
          this.nick=this.loginUser.nickName
        } else {
          this.loginUser = { ...login };
        }
        this.nick=this.loginUser.nickName
        this.tel=this.loginUser.phone
        console.log(this.loginUser);
      });
    this.$store.commit("change", false);
  }
};
</script>

<style scoped>
.show{
    opacity: 1 !important;
}
.op{
    opacity: 0;
}
.edit_photo /deep/.van-uploader__preview-image {
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 8px;
}
.edit_photo /deep/.van-uploader__preview {
    width: 100%;
    height: 100%;
    margin:0;
    
}
.edit_photo /deep/.van-uploader__upload{
    width: 100%;
    height: 100%;
    margin: 0;
}
.edit_photo /deep/.van-uploader{
    width: 100%;
    height: 100%;
}
.edit_photo /deep/.van-uploader__wrapper{
    height: 100%;
}
.UParea{
    position: absolute;
    width: 25vw;
    height: 25vw;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    overflow: hidden;
    z-index: 999 !important;
    opacity: 0;
}
.edit_nick /deep/.van-field__control{
    color: black;
    font-size: 14px;
}
.edit_nick>h3{
    font-size: 14px;
    font-weight: 600;
}
.edit_nick /deep/ .van-cell{
    padding: 2vh 0;
}
.edit_nick{
    padding-top: 2vh;
    border-bottom: 1px solid #f4f4f4;
}
.edit_photo>img{
    width: 25vw;
    height: 25vw;
    border-radius: 50%;
}
.edit_photo{
    position: relative;
    padding: 2vh 0;
    width: 100%;
    text-align: center;
}
.fanhui {
  float: left;
  font-size: 18px;
}
.edit_main{
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
</style>