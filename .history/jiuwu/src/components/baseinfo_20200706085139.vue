<template>
  <div class="baseinfo">
    <div class="cate_nav">
      <van-icon @click="fanhui" class="fanhui" name="arrow-left" />基本信息
    </div>
    <div class="base_main">
      <div class="de">
        <van-card :desc="baseData.huohao" :title="baseData.type" :thumb="baseData.detailPic[0]" />
      </div>
      <div class="select_Huohao">
        <h4>请选择您的货号</h4>
        <p>请根据鞋标或鞋盒侧标所示选择正确货号</p>
        <div @click="jihuo($event)" class="select_btn">
          <span v-text="baseData.huohao"></span>
          <van-icon class="icon" name="checked" />
        </div>
      </div>
      <div class="bujinqi">
        <div class="fon">请选择出售数量</div>
        <div class="e">
          <van-stepper :min="1" v-model="value" theme="round" button-size="22" disable-input />
        </div>
      </div>
      <div class="wash">
        <div class="tit">
          <h4 class="fon">请选择洗护类型</h4>
          <span class="xiaoexin">
            查看洗护效果
            <van-icon name="question-o" />
          </span>
        </div>
        <div class="wash_type">
          <div @click="jihuo2('deep_wash')" class="deep_wash">
            <h5 class="H5">深度洗护服务</h5>
            <div class="wash_price">
              <span>￥29.90</span>
              <del>￥39.00</del>
            </div>
            <p class="p">
              售出速度提升100%
              <br />商品售价+10%
            </p>
          </div>
          <div @click="jihuo2('fast_wash')" class="fast_wash">
            <h5 class="H5">快速清理服务</h5>
            <div class="wash_price">
              <span>￥8.00</span>
              <del>￥15.00</del>
            </div>
            <p class="p">
              专业清洁
              <br />提升商品观感
            </p>
          </div>
        </div>
      </div>
      <div class="note">
        <h3 class="fon">注意事项</h3>
        <p class="pp">
          平台收货后，将以实收商品数量为准进行商品查验并如实补充商品信息，如遇货号/款式与实物不符的情况，平台将与您沟通后续处理方式。<br><br>
          <span>确认提交订单即同意 <span class="xieyi">《寄售服务协议》</span>及 <span class="xieyi">《洗护服务协议》</span></span>
        </p>
      </div>
      <div class="tab_btn">
          <van-button  :disabled="disable" type="primary" block>确认提交</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "baseinfo",
  data() {
    return {
      baseData: {
        detailPic: []
      },
      value: 1,
      disable:true,
    };
  },
  methods: {
    ...mapMutations(["change"]),
    fanhui() {
      this.$router.go(-1);
      this.$store.commit("change", true);
    },
    jihuo(e) {
      if (e.target.className == "select_btn active") {
        e.target.className = "select_btn";
        this.disable=true
      } else {
        e.target.className = "select_btn active";
        this.disable=false
      }
    },
    jihuo2(data) {
      let another;
      if (data == "deep_wash") {
        another = "fast_wash";
      } else {
        another = "deep_wash";
      }
      let dom = document.querySelector(`.${data}`);
      let dom2 = document.querySelector(`.${another}`);
      if (dom.className == `${data} active`) {
        dom.className = `${data}`;
      } else {
        dom2.className = `${another}`;
        dom.className = `${data} active`;
      }
    }
  },
  mounted() {
    if (this.$route.params.data) {
      this.baseData = this.$route.params.data;
      window.localStorage.setItem(
        "baseinfo",
        JSON.stringify(this.$route.params.data)
      );
    } else {
      this.baseData = JSON.parse(window.localStorage.getItem("baseinfo"));
    }
    this.$store.commit("change", false);
  }
};
</script>

<style scoped>
.tab_btn{
    position: fixed;
    width: 100%;
    bottom: 0;
    padding: 0 4vw 2vh;
    background: white;
}
.pp{
    margin-top: 1vh;
    color: #999;
  font-size: 12px;
}
.xieyi{
    color: rgb(83, 163, 100);
}
.p {
  color: #999;
  font-size: 12px;
}
.wash_price > del {
  color: #999;
  font-size: 13px;
}
.wash_price > span {
  font-weight: 600;
}
.wash_price {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1.5vh 2.5vw;
}
.H5 {
  font-weight: 600;
  font-size: 14px;
}
.deep_wash,
.fast_wash {
  border: 1px solid rgb(242, 242, 242);
  padding: 1.5vh 1.5vh;
  width: 48%;
  background: rgb(242, 242, 242);
  text-align: center;
}
.xiaoexin {
  font-size: 12px;
  color: #999;
}
.tit,
.wash_type {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1vh 0;
}
.e /deep/.van-stepper__input {
  font-size: 18px;
  font-weight: 700;
}
.e /deep/.van-stepper--round .van-stepper__minus {
  color: #333;
  background-color: #fff;
  border: 2px solid #333;
}
.e /deep/.van-stepper--round .van-stepper__plus {
  color: #333;
  background-color: white;
  border: 2px solid #333;
}
.bujinqi {
  display: flex;
  justify-content: space-between;
  padding: 2vh 4vw;
  background: white;
  margin-bottom: 1vh;
  align-items: center;
}
.active > .wash_price > span {
  color: #333;
}
.active > p {
  color: rgb(83, 163, 100);
}
.active {
  background: rgb(244, 255, 247);
  border: 1px solid rgb(83, 163, 100) !important;
  color: rgb(83, 163, 100) !important;
}
.select_btn > span {
  font-size: 18px;
  font-weight: 700;
}
.select_btn {
  box-sizing: border-box;
  border: 1px solid rgb(242, 242, 242);
  margin: 1.5vh 0;
  background: rgb(242, 242, 242);
  padding: 2vh 6vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.select_Huohao > p {
  color: #999;
  font-size: 11px;
  padding: 0.7vh 0;
}
.select_Huohao > h4,
.fon {
  font-size: 13px;
  font-weight: 600;
}
.de,
.select_Huohao,
.wash,
.note {
  padding: 2vh 4vw;
  background: white;
  margin-bottom: 1vh;
}
.van-card__desc {
  margin-top: 3vh;
}
.van-card__title {
  margin-top: 1vh;
}
.van-card {
  background: white;
}
.base_main {
  width: 100%;
  background: #fafafa;
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
div {
  box-sizing: border-box;
}
</style>