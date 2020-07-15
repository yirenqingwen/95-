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
                  请选择
                  <van-icon name="arrow" />
                </span>
              </div>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div>
            asfdsg
            <br />
            <br />
            <br />asfafasf
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div>
            asfdsg
            <br />
            <br />
            <br />asfafasf
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div>
            asfdsg
            <br />
            <br />
            <br />asfafasf
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div>
            asfdsg
            <br />
            <br />
            <br />asfafasf
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div>
            asfdsg
            <br />
            <br />
            <br />asfafasf
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="nextBtn">
      <van-button @click="next" type="primary" block>{{btn_text}}</van-button>
    </div>

    <!-- ----------- -->
    <van-action-sheet v-model="show" title="选择尺码">
      <div class="content">
        
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
      btn_text: "下一步（1/6）",
      active: 0,
      baseData: {
        detailPic: []
      },
      show: false
    };
  },
  methods: {
    ...mapMutations(["change"]),
    fanhui() {
      if (this.active == 0) {
        this.$router.go(-1);
        this.$store.commit("change", true);
      } else {
        this.active--;
        this.btn_text = `下一步(${this.active + 1}/6)`;
      }
      let swiper = this.$refs.swiper;
      swiper.prev();
    },
    next() {
      this.active++;
      if (this.active == 5) {
        this.btn_text = "提交";
      } else {
        this.btn_text = `下一步(${this.active + 1}/6)`;
      }
      let swiper = this.$refs.swiper;
      swiper.next();
    },
    jihuo(e) {
      if (e.target.className == "select_btn active") {
        e.target.className = "select_btn";
        this.disable = true;
      } else {
        e.target.className = "select_btn active";
        this.disable = false;
      }
    },
    tan() {
      this.show = true;
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
.step {
  padding: 0 2vw;
}
div {
  box-sizing: border-box;
}
</style>