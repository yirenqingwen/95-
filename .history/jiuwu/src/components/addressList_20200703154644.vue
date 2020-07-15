<template>
  <div class="addressList">
    <div class="cate_nav">
      <van-icon @click="fanhui" class="fanhui" name="arrow-left" />地址管理
    </div>
    <div class="address_main">
      <van-address-list
        v-if="or"
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认地址"
        @add="onAdd"
        @edit="onEdit"
      />
      <van-address-edit
        v-if="!or"
        :area-list="areaList"
        show-set-default
        show-search-result
        :search-result="searchResult"
        area-placeholder="请选择所在地区"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import area from "../../area/areaList.js";
export default {
  data() {
    return {
      chosenAddressId: "1",
      or:true,
      list: [
        // {
        //   id: "1",
        //   name: "张三",
        //   tel: "13000000000",
        //   address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
        //   isDefault: true
        // },
      ],
      areaList: area,
      searchResult: []
    };
  },
  methods: {
    ...mapMutations(["change"]),
    fanhui() {
      this.$router.go(-1);
      this.$store.commit("change", true);
    },
    onAdd() {
      this.or=!this.or
    },
    onEdit(item, index) {

    },
    onSave(content) {
      this.api
        .saveAddress({ user: this.$cookies.get("user_id"), address: content })
        .then(res => {
          this.$toast(res.data.msg)
          this.or=!this.or
        });
    }
  },
  mounted() {
    this.$store.commit("change", false);
    this.api.getAddressLis({user:this.$cookies.get("user_id")}).then(res=>{
        let
        
    })
  }
};
</script>

<style scoped>
.address_main /deep/ .van-field__label {
  display: none;
}
.address_main /deep/.van-button--danger {
  color: #fff;
  background-color: rgb(84, 165, 102);
  border: 1px solid rgb(84, 165, 102);
}
.van-address-item__address {
  color: #999;
}
.van-address-item__name {
  font-size: 14px;
  font-weight: 600;
}
.address_main /deep/.van-tag--round,
.van-tag--round::after {
  border-radius: 0;
}
.address_main /deep/.van-tag--danger {
  background-color: rgb(241, 249, 245);
  color: rgb(84, 165, 102);
}
.address_main /deep/.van-address-item {
  padding-left: 0;
}
.address_main /deep/.van-radio__icon {
  display: none;
}
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