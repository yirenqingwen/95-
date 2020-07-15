<template>
  <div class="main">
    <div class="nav">
      <span @click="showClass(0)">闪电直发</span>
      <span @click="showClass('class')">
        成色
        <i class="iconfont icon-xiajiantou"></i>
      </span>
      <span @click="showClass('size')">
        尺码
        <i class="iconfont icon-xiajiantou"></i>
      </span>
      <span @click="showClass('brand')">
        品牌
        <i class="iconfont icon-xiajiantou"></i>
      </span>
      <span @click="showClass('sort')">
        <i class="iconfont icon-paixu"></i>
      </span>
    </div>
    <div v-if="classShow" class="class">
      <div id="s">
        <h4>未穿着</h4>
        <div>
          <button @click="filter($event,'SS')">SS级（全新、极轻微瑕疵）</button>
          <button @click="filter($event,'S')">S级（全新瑕疵）</button>
        </div>
      </div>
      <div id="s">
        <h4>有穿着</h4>
        <div>
          <button @click="filter($event,'A')">A级（有轻微试穿痕迹）</button>
          <button @click="filter($event,'B')">B级（有自然使用痕迹）</button>
        </div>
      </div>
      <div class="btn">
        <button class="btn_reset" @click="reset">重置</button>
        <button class="confirm" @click="confirm">确认</button>
      </div>
    </div>
    <div v-if="sizeShow" class="size">
      <div id="c">
        <div v-for="(i,index) in 30" :key="index">
          <button @click="filter($event,i*0.5+35)">{{i*0.5+35}}</button>
        </div>
      </div>
      <div class="btn">
        <button @click="reset" class="btn_reset">重置</button>
        <button @click="confirm" class="confirm">确认</button>
      </div>
    </div>
    <div v-if="brandShow" class="brand">
      <div id="B">
        <button @click="filter($event,item.toLowerCase())" v-for="(item,index) in BrandList" :key="index">{{item}}</button>
      </div>
      <div class="btn">
        <button @click="reset" class="btn_reset">重置</button>
        <button @click="confirm" class="confirm">确认</button>
      </div>
    </div>
    <div v-if="sortShow" class="sort">
      <button>最热商品</button>
      <button>价格由低到高</button>
      <button>价格由高到低</button>
    </div>
    <div id="content">
      <vueWaterfallEasy
        @click="gotoDeatil"
        :loadingDotCount="0"
        :imgsArr="imgsArr"
        @scrollReachBottom="getData"
      >
        <div class="img-info" slot-scope="props">
          <p class="s-info">{{props.value.perfect}} 级·{{props.value.size}} 码</p>
          <p class="name_info">{{props.value.type}}</p>
          <div class="exin">
            <div class="provience">
              省￥{{props.value.marketPrice-props.value.price}}
            </div>
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
  </div>
</template>

<script>
import vueWaterfallEasy from "vue-waterfall-easy";
export default {
  name: "markdown",
  components: {
    vueWaterfallEasy
  },
  data() {
    return {
      classShow: false,
      sizeShow: false,
      brandShow: false,
      sortShow: false,
      BrandList: [
        "Nike",
        "Jordan",
        "adidas Originals",
        "adidas",
        "Converse",
        "Puma",
        "LiNing",
        "New Balance",
        "Under Armour",
        "Anta",
        "Reebok",
        "Peak"
      ],
      shopData: [],
      imgsArr: [],
      offset: 0,
      tmp: [],
      condition: []
    };
  },
  methods: {
    showClass(par) {
      if (par != 0) {
        if (par == "class") {
          this.brandShow = false;
          this.sizeShow = false;
          this.sortShow = false;
          this.classShow = true;
        }
        if (par == "brand") {
          this.brandShow = true;
          this.sizeShow = false;
          this.sortShow = false;
          this.classShow = false;
        }
        if (par == "size") {
          this.brandShow = false;
          this.sizeShow = true;
          this.sortShow = false;
          this.classShow = false;
        }
        if (par == "sort") {
          this.brandShow = false;
          this.sizeShow = false;
          this.sortShow = true;
          this.classShow = false;
        }
      } else {
        this.brandShow = false;
        this.sizeShow = false;
        this.sortShow = false;
        this.classShow = false;
      }
    },
    chimaShaixuan() {},
    fanhui() {
      this.$router.go(-1);
    },
    getData(data) {
      if (data) {
        this.imgsArr=[]
        let obj={...data}
        this.api.getSortData(obj).then(res => {
          this.shopData = res.data.data.map(item => {
            return {
              ...item,
              src: item.detailPic[0]
            };
          });
          this.imgsArr = this.imgsArr.concat(this.shopData);
          // console.log(this.imgsArr);
          this.offset += 20;
        });
      } else {
        this.api.getAll(this.offset).then(res => {
          this.shopData = res.data.data.map(item => {
            return {
              ...item,
              src: item.detailPic[0]
            };
          });
          this.imgsArr = this.imgsArr.concat(this.shopData);
          // console.log(this.imgsArr);
          this.offset += 20;
        });
      }
    },
    gotoDeatil(data, { index, value }) {
      this.$router.push({ name: "detail", params: { value } });
    },
    filter(e, data) {
      if (this.condition.indexOf(data) == -1) {
        this.condition.push(data);
        e.target.className = "active";
        console.log(this.condition)
      } else {
        this.condition.splice(this.condition.indexOf(data), 1);
        e.target.className = "";
        console.log(this.condition)
      }
    },
    reset() {
      this.condition = [];
    },
    confirm() {
      this.sizeShow = false;
      this.classShow = false;
      this.brandShow = false;
      this.sortShow = false;
      this.getData(this.condition);
    },
  },
  mounted() {
    this.getData();
  }
};
</script>

<style>
.active {
  border: rgb(153, 228, 175) !important;
  background: rgb(244, 255, 247) !important;
  color: rgb(99, 173, 116) !important;
}
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
  color: rgb(226,118,66);
  font-size: 10px;
  width: 12vw;
  padding: 0.5vh 0;
  background: rgb(251,246,239);
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
.sort button:nth-last-child() {
  border-bottom: none;
}
.sort button {
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid rgb(245, 245, 245);
  background: none;
  box-sizing: border-box;
  padding: 1vh 0;
  font-size: 10px;
}
#B button {
  display: block;
  box-sizing: border-box;
  width: 45vw;
  padding: 1vh 0;
  border: none;
  margin-bottom: 1vh;
  font-size: 10px;
}
#c button {
  display: block;
  box-sizing: border-box;
  width: 29vw;
  padding: 1vh 0;
  border: none;
  margin-bottom: 1vh;
  font-size: 10px;
}
#c,
#B {
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 25vh;
  overflow: scroll;
}
.confirm {
  background: rgb(83, 163, 100);
  color: white;
  border: none;
}
.btn_reset {
  background: white;
  color: rgb(83, 163, 100);
  border: 1px solid rgb(83, 163, 100);
}
.btn > button {
  display: block;
  box-sizing: border-box;
  width: 46%;
  padding: 1vh 0;
  font-size: 12px;
}
.btn {
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 1vh 0;
}
#s div button {
  display: block;
  width: 46%;
  color: #333;
  background: rgb(245, 245, 245);
  font-size: 10px;
  border: none;
  box-sizing: border-box;
  padding: 1vh 0;
}
#s div {
  display: flex;
  justify-content: space-around;
}
#s h4 {
  font-size: 12px;
  font-weight: 700;
  padding: 1vh 0;
}
.class,
.size,
.brand,
.sort {
  box-sizing: border-box;
  padding: 0.8vh 3vw;
  background: white;
}
.icon-paixu {
  color: rgb(83, 163, 100);
}
.icon-xiajiantou {
  font-size: 4px !important;
}
.nav > span {
  display: block;
  font-size: 10px;
  align-items: center;
  line-height: 1.5rem;
}
.nav {
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 0.8vh 2.5vw;
}
.main {
  background: rgb(245, 245, 245);
  padding-bottom: 50px;
}
</style>