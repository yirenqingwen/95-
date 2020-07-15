<template>
  <div class="search">
    <van-search
      v-model="value"
      show-action
      placeholder="搜索商品名称或货号"
      @search="onSearch"
      @cancel="onCancel"
    />
    <div v-if="show2" class="search_hot">
      <h3>历史搜索</h3>
      <div class="show_hot">
        <span
          class="gray"
          @click="search(item)"
          v-for="(item ,index) in historyList"
          :key="index"
        >{{item}}</span>
      </div>
    </div>
    <div v-if="show" class="search_hot">
      <h3>热门搜索</h3>
      <div class="show_hot">
        <span class="yellow" v-for="(item ,index) in hotList" :key="index">{{item}}</span>
      </div>
    </div>
    <!-- 展示 -->
    <div v-if="hello" id="content">
      <vueWaterfallEasy
        @click="gotoDeatil"
        :loadingDotCount="0"
        :imgsArr="imgsArr"
        @scrollReachBottom="getData(keywords)"
      >
        <div class="img-info" slot-scope="props">
          <p class="s-info">{{props.value.perfect}} 级·{{props.value.size}} 码</p>
          <p class="name_info">{{props.value.type}}</p>
          <div class="exin">
            <div class="provience">省￥{{props.value.marketPrice-props.value.price}}</div>
            <!-- <div class="green">市场价￥{{props.value.marketPrice}}</div> -->
          </div>
          <p class="price-info">
            <span>￥{{props.value.price}}</span>
            <button v-if="props.value.fastSend">
              <i class="iconfont icon-shandian"></i>闪电直发
            </button>
          </p>
        </div>
      </vueWaterfallEasy>
    </div>
    <div v-if="none">暂无数据</div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import vueWaterfallEasy from "vue-waterfall-easy";
export default {
  name: "search",
  components: {
    vueWaterfallEasy
  },
  data() {
    return {
      value: "",
      show: true,
      show2: true,
      hello: false,
      none: false,
      historyList: [],
      searchData: [],
      imgsArr: [],
      offset: 0,
      keywords: "",
      hotList: [
        "zippo",
        "Yeezy350",
        "YEEZY",
        "AJ1",
        "匡威",
        "欧文",
        "AJ11",
        "SACAI",
        "AF1",
        "KD",
        "科比",
        "LBJ"
      ]
    };
  },
  methods: {
    ...mapMutations(["change"]),
    onSearch(val) {
      this.imgsArr = [];
      if (this.historyList.indexOf(val) == -1) {
        this.historyList.push(val);
        window.localStorage.setItem(
          "histroyList",
          JSON.stringify(this.historyList)
        );
      }
      window.localStorage.setItem("keywords", val);
      this.getData(val);
    },
    onCancel() {
      this.$router.go(-1);
      this.$store.commit("change", true);
    },
    getData(keywords) {
      this.api.getSearchData(keywords, this.offset).then(res => {
        this.show2 = false;
        this.show = false;
        if (res.data.data.length == 0) {
          this.none = true;
        } else {
          this.none = false;
          this.searchData = res.data.data.map(item => {
            return {
              ...item,
              src: item.detailPic[0]
            };
          });
          this.imgsArr = this.imgsArr.concat(this.searchData);
          console.log(this.imgsArr);
          this.offset += 20;
          this.hello = true;
        }
      });
    },
    gotoDeatil(data, { index, value }) {
      this.$router.push({ name: "detail", params: { value } });
    },
    search(data) {
      this.onSearch(data);
    }
  },
  mounted() {
    this.$store.commit("change", false);
    if (window.localStorage.getItem("keywords")) {
      this.keywords = window.localStorage.getItem("keywords");
    }
    if (
      window.localStorage.getItem("histroyList") &&
      JSON.parse(window.localStorage.getItem("histroyList")).length != 0
    ) {
      this.historyList = JSON.parse(window.localStorage.getItem("histroyList"));
      this.show2 = true;
    } else {
      this.show2 = false;
    }
  }
};
</script>

<style scoped>
.icon-xiangxiajiantou {
  font-size: 12px !important;
}
.exin {
  display: flex;
}
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
.price-info > button > i {
  width: 18px;
}
.price-info > button {
  float: right;
  border: none;
  background: none;
  text-align: center;
  display: flex;
  font-size: 10px;
  color: #ccc;
  align-items: center;
}
.price-info > span {
  font-size: 13px;
  color: black;
  font-weight: 700;
}
.price-info {
  box-sizing: border-box;
  padding: 0.8vh 2vw;
}
.green {
  text-align: center;
  color: rgb(153, 153, 153);
  font-size: 10px;
  width: 18vw;
  padding: 0.5vh 0;
  background: rgb(247, 247, 247);
}
.provience {
  text-align: center;
  color: rgb(226, 118, 66);
  font-size: 10px;
  width: 12vw;
  padding: 0.5vh 0;
  background: rgb(251, 246, 239);
  margin-left: 2vw;
}
.s-info,
.name_info {
  font-size: 10px;
  font-weight: 600;
  color: #333;
  box-sizing: border-box;
  padding: 0.8vh 2vw;
}
.img-inner-box {
  overflow: hidden;
}
.img-info {
  background: white;
}
#content {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding: 0 2vw;
}

.gray {
  display: inline-block;
  padding: 1.5vh 3vw;
  background: #ccc;
  color: black;
  font-size: 12px;
  margin: 2vw;
  margin-left: 0;
}
.yellow {
  display: inline-block;
  padding: 1.5vh 3vw;
  background: rgb(254, 248, 232);
  color: black;
  font-size: 12px;
  margin: 2vw;
  margin-left: 0;
}
.search_hot > h3 {
  font-weight: 600;
  font-size: 14px;
}
.search_hot {
  padding-top: 1vh;
}
.van-search {
  padding-left: 0px;
}
.search {
  padding: 1vh 4vw;
}
div {
  box-sizing: border-box;
}
</style>