import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import show from '../components/show.vue'
import cateCom from '../components/cateCom.vue'
import markdown from '../components/markdown.vue'
import detail from '../components/detail.vue'
import search from '../components/search.vue'
import buy from '../views/buy.vue'
import person from '../views/person.vue'
import sale from '../components/sale.vue'
import baseinfo from '../components/baseinfo.vue'
import baseinfo2 from '../components/baseinfo2.vue'
import login from '../views/login.vue'
import banner1 from '../components/banner1.vue'
import banner2 from '../components/banner2.vue'
import banner3 from '../components/banner3.vue'
import settings from '../components/settings.vue'
import edit from '../components/edit.vue'
import zhifubao from '../components/zhifubao.vue'
import addressList from '../components/addressList.vue'
import addressEdit from '../components/addressEdit.vue'
import confirmOrder from '../components/confirmOrder.vue'
import myBuy from '@/components/myBuy.vue'
import collect from '@/components/collect.vue'
import orderDetail from '@/components/orderDetail.vue'
import kefu from '@/components/kefu.vue'
import mySale from '../components/mySale.vue'
import suggestion from '../components/suggestion.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/show', name: "show", component: show },
  { path: "/cate", name: "cateCom", component: cateCom },
  { path: "/markdown", name: "markdown", component: markdown },
  { path: "/detail", name: "detail", component: detail, },
  { path: '/search', name: "search", component: search, },
  { path: "/buy", name: "buy", component: buy },
  { path: '/person', name: "person", component: person },
  { path: '/sale', name: "sale", component: sale },
  { path: '/baseinfo', name: "baseinfo", component: baseinfo },
  { path: '/baseinfo2', name: "baseinfo2", component: baseinfo2 },
  { path: '/login', name: "login", component: login },
  { path: '/banner1', name: "banner1", component: banner1 },
  { path: '/banner2', name: "banner2", component: banner2 },
  { path: '/banner3', name: "banner3", component: banner3 },
  { path: '/settings', name: "settings", component: settings },
  { path: '/edit', component: edit },
  { path: '/zhifubao', component: zhifubao },
  { path: '/addressList', name: "addressList", component: addressList },
  { path: '/addressEdit', name: "addressEdit", component: addressEdit },
  { path: '/confirmOrder', name: "confirmOrder", component: confirmOrder },
  { path: '/myBuy', name:"myBuy", component: myBuy },
  { path: '/collect',name:"collect", component: collect },
  { path: '/orderDetail',name:"orderDetail", component: orderDetail },
  { path: '/kefu', name:"kefu" ,component: kefu },
  { path: '/mySale',name:"mySale", component: mySale }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
