<template>
  <div class="addressEdit">
    <div class="cate_nav">
      <van-icon @click="fanhui" class="fanhui" name="arrow-left" />客服
    </div>
    <div class="addressEdit_main">
        <butto @click="">客服聊天</butto>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      
    };
  },
  methods: {
    ...mapMutations(["change"]),
    fanhui() {
      this.$router.go(-1);
      this.$store.commit("change", true);
    },
    // 客服
    contactKY () {
      window.easemobim = window.easemobim || {}
      easemobim.config = {
        configId: '304fe7b6-3046-416b-b169-0398f647b90e',
        visitor: {         
            trueName: '黎小冷',
            qq: '567**34',
            phone: '188****8888',
            companyName: '环信',
            userNickname: '我是黎小冷',
            description: '描述信息',
            email: '123456@**.com',
            tags:[  
              'vip1',
              'vip2'
            ]
        }
    }
      window.easemobim.bind()
    }

    // 客服
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