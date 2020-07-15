<template>
  <div class="edit">
    <div class="cate_nav">
      <van-icon @click="fanhui" class="fanhui" name="arrow-left" />个人资料
    </div>
    <div class="edit_main">
        <div class="edit"></div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
        loginUser:{}
    };
  },
  methods: {
    ...mapMutations(["change"]),
    fanhui() {
      this.$router.go(-1);
      this.$store.commit("change", true);
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
        } else {
          this.loginUser = { ...login };
        }
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
.cate_nav {
  width: 100%;
  padding: 2vh 2vw;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
}
</style>