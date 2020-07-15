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
  },
  mounted() {
    
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