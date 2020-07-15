<template>
  <div class="cateMain">
    <div class="cate_nav">
        <van-icon @click="fanhui" class="fanhui" name="arrow-left" />{{cateName}}
    </div>
    <div class="cate_ban">
        <img src="../../public/image/ban.jpg" alt="">
    </div>
    <div class="cateShow">
        <div class="cateItem" @click="gotoDeatil(item)" v-for="(item,index) in cateData" :key="index">
            <div class="cateItem_img">
                <img :src="item.detailPic[0]" alt="">
            </div>
            <div class="cateItem_des">
                <p class="name">{{item.type}}</p>
                <p class="huohao">{{item.huohao}}</p>
                <p class="price">
                    <span id="price">￥{{item.price}}起 <strong>/ 省 {{item.marketPrice-item.price}}</strong> </span>
                    <span id="stock">{{item.stock}}在售</span>
                </p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
    name:"cateCom",
    data () {
        return {
           cateName:"",
           cateData:[],
        }
    },
    mounted () {
        if(this.$route.params.cateName!=undefined){
            window.localStorage.setItem("cateName",this.$route.params.cateName)
            this.cateName=window.localStorage.getItem("cateName")
        }else{
            this.cateName=window.localStorage.getItem("cateName")
        }
        this.api.getCatedetail({cateName:this.cateName}).then(
            data=>{
                this.cateData=data.data.data
                console.log(this.cateData)
            },
            err=>{
                console.log(err)
            }
        )
        this.$store.commit("change", false);
    },
    methods: {
        ...mapMutations(["change"]),
        fanhui(){
            this.$router.go(-1)
            this.$store.commit("change", true);
        },
        gotoDeatil(data){
            this.$router.push({name:"detail",params:{value:data}})
        }
    }
}
</script>

<style scoped>
#stock{
    font-size: 14px;
    color: black;
    font-weight: 500;
}
#price>strong{
    font-weight: normal;
    font-size: 11px;
    color: #ccc;
}
#price{
    font-size: 12px;
    font-weight: 600;
}
.price{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.huohao{
    font-size: 10px;
    color: #ccc;
}
.name{
    font-size: 13px;
    color: black;
}
.cateItem_des>p{
    padding: 0.5vh 0;
}
.cateItem_des{
    width: 70%;
    padding: 1vh 0.5vw;
}
.cateItem_img>img{
    width: 100%;
}
.cateItem_img{
    width: 25%;
}
    .cateItem{
        width: 100%;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
        margin-bottom: 2vh;
    }
    .cateShow{
        width: 100%;
        padding: 1vh 4vw;
    }
    .fanhui{
        float: left;
        font-size: 18px;
    }
    .cate_ban>img{
        width: 100%;
        height: 100%;
    }
    .cate_ban{
        width: 100%;
        height: 23.5vh;
    }
    .cate_nav{
        width: 100%;
        padding: 2vh 2vw;
        font-size: 16px;
        font-weight: 600;
        text-align: center;
    }
    .cateMain{
        width: 100%;
    }
    div{
        box-sizing: border-box;
    }
</style>