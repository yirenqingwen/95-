import axios from 'axios'
import qs from 'qs'
function sqGet(url , params){
    return new Promise(function(resolve , reject){
        axios.get(url , qs.stringify(params)).then(function(data){
            resolve(data)
        },function(err){
            reject(err)
        })
    })
}
// 发起post请求
function sqPost(url , params){
    return new Promise(function(resolve , reject){
        axios.post(url , params).then(function(data){
            resolve(data)
        },function(err){
            reject(err)
        })
    })
}
var baseUrl = '/api'
export default {
    // 获取首页数据
    getBannerData(){
       return sqGet(baseUrl+"/banner")
    },
    getCateData(){
        return sqGet(baseUrl+"/cate")
    },
    getAll(data){
        return sqGet(baseUrl+"/all?offset="+data)
    },
    getCatedetail(data){
        return sqPost(baseUrl+"/cateData",data)
    },
    getSortData(data){
        return sqPost(baseUrl+"/sort",data)
    },
    getFastData(data){
        return sqGet(baseUrl+"/fast?par="+data)
    },
    getSearchData(data1,data2){
        return sqGet(baseUrl+"/search?keywords="+data1+'&offseet='+data2)
    },
    getsms(data){
        return sqPost(baseUrl+"/sendcode",data)
    },
    login(data){
        return sqPost(baseUrl+"/login",data)
    },
    searchLoginUser(data){
        return sqPost(baseUrl+"/searchLoginUser",data)
    },
    updateUser(data){
        return sqPost(baseUrl+"/updateUser",data)
    },
    zhifubao(data){
        return sqPost(baseUrl+"/zhifubao",data)
    },
    
}