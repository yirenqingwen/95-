<template>
  <div class="addressEdit">
    <div class="cate_nav">
      <van-icon class="fanhui" @click="fanhui" name="arrow-left" />
      <span>修改地址</span>
      <span class="delate" @click="delate">删除地址</span>
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
    editfocus(){
        this.dizhishow=true
    },
    confirm(value){
        // console.log(value)
        this.dizhishow=false
        this.address.province=value[0].name
        this.address.city=value[1].name
        this.address.county=value[2].name
        this.provience=value[0].name+value[1].name+value[2].name
        this.address.address=this.provience
    },
    update(){
        let params={    
            ...this.address
        }
        this.api.updateAddress({newAddress:params,user:this.$cookies.get("user_id")}).then(
            res=>{
                this.$toast(res.data.msg)
            }
        )
    },
    delate() {
        this.api.delateAdd({address:this.address,user:this.$cookies.get("user_id")}).then(
            res=>{
                this.$toast(res.data.msg)
            }
        )
    }
  },
  mounted() {
    this.$store.commit("change", false);
    this.address = this.$route.params.address;
    this.provience=this.address.province + this.address.city + this.address.county
    
  }
};
</script>

<style scoped>
.select_provience{
    position: absolute;
    bottom: 0;
    width: 100%;
}
.addressEdit_btn{
    position: absolute;
    width: 100%;
    padding: 2vh 4vw;
    background: #fff;
    bottom: 2vh;
}
.addressEdit_main /deep/.van-switch--on{
    background: rgb(84, 165, 102);
}
.delate {
  font-weight: normal;
  font-size: 14px;
}
.fanhui {
  font-size: 18px;
  width: 50px;
  text-align: left;
}
.cate_nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  width: 100%;
  padding: 2vh 2vw;
  font-size: 16px;
  font-weight: 600;
}
.addressEdit{
    height: 100%;
    position: relative;
}
div {
  box-sizing: border-box;
}
</style>