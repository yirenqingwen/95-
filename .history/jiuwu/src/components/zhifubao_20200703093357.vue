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
    readed(file){
        this.$refs.up.className="UParea show"
        console.log(this.fileList)
    },
    save(){
        let formData=new FormData()
        if(this.fileList.length!=0){
            formData.append("PIC",this.fileList[0].file)
        }else{
            formData.append("PIC","")
        }
        formData.append("TEL",this.tel)
        formData.append("NICK",this.nick)
        formData.append("userId",this.$cookies.get("user_id"))
        this.api.updateUser(formData).then(
            res=>{
                this.$toast(res.data.msg)
            }
        )
    }
  },
  mounted() {
    
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