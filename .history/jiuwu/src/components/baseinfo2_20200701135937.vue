<template>
  <div class="baseinfo2">
    <div class="cate_nav">
      <van-icon @click="fanhui" class="fanhui" name="arrow-left" />基本信息
    </div>
    <!-- 步骤条 -->
    <div class="step">
      <van-steps :active="active">
        <van-step></van-step>
        <van-step></van-step>
        <van-step></van-step>
        <van-step></van-step>
        <van-step></van-step>
        <van-step></van-step>
      </van-steps>
    </div>
    <!-- 显示 -->
    <div class="step_main">
      <van-swipe ref="swiper" :show-indicators="false" :touchable="false" :loop="false">
        <!-- 第一步 -->
        <van-swipe-item>
          <div class="item">
            <div class="de">
              <van-card
                :desc="baseData.huohao"
                :title="baseData.type"
                :thumb="baseData.detailPic[0]"
              />
            </div>
            <div class="select_Huohao">
              <h4>请选择您的货号</h4>
              <p>请根据鞋标或鞋盒侧标所示选择正确货号</p>
              <div @click="jihuo($event)" class="select_btn">
                <span v-text="baseData.huohao"></span>
                <van-icon class="icon" name="checked" />
              </div>
            </div>
            <div class="select_Size">
              <div class="qian" @click="tan">
                <h4 class="fon">请选择你的尺码</h4>
                <span class="se">
                  <strong>{{size==0?"请选择":size}}</strong>
                  <van-icon name="arrow" />
                </span>
              </div>
            </div>
          </div>
        </van-swipe-item>
        <!-- 第二部 -->
        <van-swipe-item>
          <div class="item">
            <div class="select_Huohao">
              <h4>请选择商品整体概况</h4>
              <p>请根据实际情况进行选择，否则无法通过平台审核</p>
              <div @click="jihuo($event)" class="select_btn">
                <span>全新无试穿</span>
                <van-icon class="icon" name="checked" />
              </div>
              <div @click="jihuo($event)" class="select_btn">
                <span>仅试穿</span>
                <van-icon class="icon" name="checked" />
              </div>
              <div @click="jihuo($event)" class="select_btn">
                <span>正常穿着</span>
                <van-icon class="icon" name="checked" />
              </div>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="item">
            <div class="select_Huohao">
              <h4>请选择鞋盒整体概况</h4>
              <p>请根据实际情况进行选择，否则无法通过平台审核</p>
              <div @click="jihuo($event)" class="select_btn">
                <span>鞋盒完好</span>
                <van-icon class="icon" name="checked" />
              </div>
              <div @click="jihuo($event)" class="select_btn">
                <span>鞋盒破损</span>
                <van-icon class="icon" name="checked" />
              </div>
              <div @click="jihuo($event)" class="select_btn">
                <span>无原盒</span>
                <van-icon class="icon" name="checked" />
              </div>
              <div @click="jihuo($event)" class="select_btn">
                <span>缺少盒盖</span>
                <van-icon class="icon" name="checked" />
              </div>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="item">
            <div class="select_Huohao">
              <h4>请选择商品瑕疵概况</h4>
              <p>请根据实际情况进行选择，否则无法通过平台审核</p>
              <div @click="jihuo($event)" class="select_btn">
                <span>氧化泛黄</span>
                <van-icon class="icon" name="checked" />
              </div>
              <div @click="jihuo($event)" class="select_btn">
                <span>破损</span>
                <van-icon class="icon" name="checked" />
              </div>
              <div @click="jihuo($event)" class="select_btn">
                <span>开胶</span>
                <van-icon class="icon" name="checked" />
              </div>
              <div @click="jihuo($event)" class="select_btn">
                <span>色差</span>
                <van-icon class="icon" name="checked" />
              </div>
              <div @click="jihuo($event)" class="select_btn">
                <span>污渍及褶皱</span>
                <van-icon class="icon" name="checked" />
              </div>
              <div @click="jihuo($event)" class="select_btn">
                <span>做工瑕疵</span>
                <van-icon class="icon" name="checked" />
              </div>
              <div @click="jihuo($event)" class="select_btn">
                <span>磨损</span>
                <van-icon class="icon" name="checked" />
              </div>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="item">
            <div class="select_Huohao">
              <h4>请选择上传商品图片</h4>
              <p>请根据实际情况进行选择，否则无法通过平台审核</p>
              <van-uploader :after-read="afterRead" />
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="nextBtn">
      <van-button :disabled="next_disable" @click="next" type="primary" block>{{btn_text}}</van-button>
    </div>

    <!-- ----------- -->
    <van-action-sheet v-model="show" title="选择尺码">
      <div class="show_cont">
        <div class="every_size">
          <button
            class="size_btn"
            v-for="(i,index) in 30"
            :key="index"
            @click="filter($event,i*0.5+35)"
          >{{i*0.5+35}}</button>
        </div>
        <van-button @click="size_confirm" :disabled="disable" type="primary" block>确认</van-button>
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "baseinfo2",
  data() {
    return {
      btn_text: "下一步（1/5）",
      next_disable: true,
      active: 1,
      baseData: {
        detailPic: []
      },
      show: false,
      tmp: 0,
      tmp2: 0,
      size: 0,
      disable: true
    };
  },
  methods: {
    ...mapMutations(["change"]),
    fanhui() {
      if (this.active == 1) {
        this.$router.go(-1);
        this.$store.commit("change", true);
      } else {
        this.active--;
        this.btn_text = `下一步(${this.active}/5)`;
        this.next_disable = false;
      }
      let swiper = this.$refs.swiper;
      swiper.prev();
    },
    next() {
      this.active++;
      if (this.active == 5) {
        this.btn_text = "提交";
      } else {
        this.btn_text = `下一步(${this.active}/5)`;
      }
      let swiper = this.$refs.swiper;
      swiper.next();
      this.next_disable = true;
    },
    jihuo(e) {
      if (this.tmp2 == 0) {
        this.tmp2 = e.target;
        e.target.className = "select_btn active";
      } else {
        this.tmp2.className = "select_btn";
        this.tmp2 = e.target;
        e.target.className = "select_btn active";
      }
      this.next_disable = false;
    },
    tan() {
      this.show = true;
    },
    filter(e, data) {
      if (this.tmp == 0) {
        this.tmp = e.target;
        e.target.className = "size_btn active";
        this.size = data;
      } else {
        this.tmp.className = "size_btn";
        this.tmp = e.target;
        e.target.className = "size_btn active";
        this.size = data;
      }
      this.disable = false;
    },
    size_confirm() {
      this.show = false;
      this.next_disable = false;
      console.log(this.size);
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    }
  },
  mounted() {
    if (this.$route.params.data) {
      this.baseData = this.$route.params.data;
      window.localStorage.setItem(
        "baseinfo2",
        JSON.stringify(this.$route.params.data)
      );
    } else {
      this.baseData = JSON.parse(window.localStorage.getItem("baseinfo2"));
    }
    this.$store.commit("change", false);
  }
};
</script>

<style scoped>
.every_size {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.size_btn {
  display: block;
  border: none;
  color: #333;
  font-size: 18px;
  font-weight: 700;
  width: 15vw;
  margin: 0 2vw 2vw 0;
  padding: 2vh 0;
  background: rgb(242, 242, 242);
  border: 1px solid rgb(242, 242, 242);
}
.show_cont {
  padding: 1vh 4vw;
}

.se > strong {
  color: #333;
}
.se {
  display: flex;
  align-items: center;
  color: #999;
}
.qian {
  padding: 1.5vh 0;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.select_Size {
  padding: 1vh 4vw;
  background: white;
  margin-bottom: 1vh;
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
.select_Huohao {
  padding: 0vh 4vw;
  background: white;
  margin-bottom: 1vh;
}
.fullpage {
  width: 100%;
  overflow: hidden;
}
.nextBtn {
  width: 100%;
  position: fixed;
  bottom: 2vh;
  padding: 0 4vw;
}
.van-steps--horizontal {
  padding: 0;
}
.step /deep/ .van-step--horizontal .van-step__icon {
  display: none;
  font-size: 12px;
}
.step /deep/.van-step__circle {
  display: none;
  width: 5px;
  height: 5px;
  background-color: #969799;
  border-radius: 50%;
}
.step {
  padding: 0 2vw;
}
div {
  box-sizing: border-box;
}
</style>