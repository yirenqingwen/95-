<template>
  <div id="app">
    <router-view/>
</template>
   <script>
    export default {
         data(){
             return{
                 active:'home',
                 id:'123',
                 isshow:true
             }
         },
         mounted(){
          this.id=this.$route.query.id,
                // console.log(this.$route.path)
               this.tarbar(this.$route.path)
         },
         updated(){
            this.isshow=this.$store.state.isshow
          //  this.active=this.$store.state.tarbar
          //  console.log(this.$store.state.tarbar)
         },
         watch:{
           tarbar(){
             console.log('11111111111')
           }
         },
         methods:{
                 tarbar(value){
                   if(value=="/More"){
                     this.active='More'
                   }
                    if(value=="/Notch"){
                     this.active='More'
                   }
                   if(value=="/"){
                     this.active='home'
                   }
                 } 
              
         }
    }
</script>
<style>
   
</style>
