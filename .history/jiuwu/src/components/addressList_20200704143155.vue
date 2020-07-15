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
        @select="onSelect"
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
      <div class="zanwudizhi" v-if="zanwudizhi">
          暂无地址信息
      </div>
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
      or: true,
      list: [
        //    {
        //   id: '1',
        //   name: '张三',
        //   tel: '13000000000',
        //   address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
        //   isDefault: true,
        // },
      ],
      areaList: area,
      searchResult: [],
      zanwudizhi:false
    };
  },
  methods: {
    ...mapMutations(["change"]),
    fanhui() {
      this.$router.go(-1);
      this.$store.commit("change", true);
    },
    onAdd() {
      this.or = !this.or;
    },
    onEdit(item, index) {
      this.$router.push({ name: "addressEdit", params: { address: item } });
    },
    onSave(content) {
      // console.log(content)
      this.api
        .saveAddress({ user: this.$cookies.get("user_id"), address: content })
        .then(res => {
          this.$toast(res.data.msg);
          this.or = !this.or;
          this.getAddress();
        });
      
    },
    getAddress() {
      this.list = [];
      this.api
        .getAddressLis({ user: this.$cookies.get("user_id") })
        .then(res => {
            console.log(res)
          if (res.data.msg == "暂无数据") {
              this.zanwudizhi=true
          } else {
              this.zanwudizhi=false
            let tmp = res.data.data;
            tmp.forEach((item, index) => {
              if (item.isDefault == false) {
                this.list.push({
                  ...item,
                  address:
                    item.province + item.city + item.county + item.addressDetail
                });
              } else {
                // tmp.splice(index, 1)[0];
                // console.log(defaultAddress)
                this.list.unshift({
                  ...item,
                  address:
                    item.province +
                    item.city +
                    item.county +
                    item.addressDetail
                });
              }
            });
          }
        });
        console.log(this.list)
    },
    onSelect(item,index){
      if(this.$route.params.order){
        // console.log(item)

      }else{

      }

    }
  },
  mounted() {
    this.$store.commit("change", false);
    this.getAddress();
  }
};
</script>

<style scoped>
.zanwudizhi{
    padding: 5vh 30vw;
    text-align: center;
    margin-top: 40vh;
}
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