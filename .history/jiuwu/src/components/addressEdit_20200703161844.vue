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