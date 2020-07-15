var app = require('./bin/web.js')
var allMongo = require('./bin/mongo.js')
const { all } = require('./bin/web.js')
// banner数据存储
//  var banItem=new bantable(bannerData[2])
//  banItem.save(function(err){
//      if(!err){
//          console.log("保存成功")
//      }
//  })
// 分类数据存储
var cateTable = allMongo.cateTable
// var cateItem = new cateTable(cateData[7])
// cateItem.save(function(err){
//          if(!err){
//              console.log("保存成功")
//          }
//      })
// 商品数据存储
var shopTable=allMongo.shopTable
// var shopItem=new shopTable({
//     id:5,
//     size:39,
//     type:"【599闷包】02号闷包",
//     perfect:"S",
//     class:"首选闷包",
//     brand:"Nike",
//     marketPrice:1299,
//     price:599,
//     description:"左右鞋边、鞋底污渍、鞋头脚印、鞋盒破损",
//     collect:6,
//     stock:2,
//     huohao:"MB202062812599",
//     detailPic:[
//         "http://localhost:3000/menbao/air/detail (1).JPG",
//         "http://localhost:3000/menbao/air/detail (2).JPG",
//         "http://localhost:3000/image/air/detail (3).JPG",
//         "http://localhost:3000/image/air/detail (4).JPG",
//         "http://localhost:3000/image/air/detail (5).JPG",
//         "http://localhost:3000/image/air/detail (6).JPG",
//     ],
//     fastSend:true,
//     menbao:true
// })
// shopItem.save(function(err,data){
//     if(data){
//         console.log("保存成功")
//     }
// })

// banner接口（无参数）
app.get("/banner", function (req, res) {
    var bannerData = []
    allMongo.bantable.find(function (err, data) {
        if (err) {
            console.log(err)
        } else {
            // console.log(data)
            bannerData = data
            res.json({
                data: bannerData
            })
        }
    })
})
// 分类获取接口
app.get("/cate", function (req, res) {
    var cateData = []
    cateTable.find().exec((err, data) => {
        if (data) {
            cateData=data
            res.json({
                data: cateData
            })
        }else{
            console.log(err)
        }
    })

})
// 商品获取接口
app.get("/all",function(req,res){
    // console.log(req.query)
    shopTable.find().skip(Number(req.query.offset)).limit(20).exec((err,data)=>{
        if(data){
            res.json({
                data:data
            })
        }
    })
})
// 商品分类请求
app.post("/cateData" ,function(req,res){
    shopTable.find({class:req.body.cateName}).exec(
        (err,data)=>{
            if(data){
                res.json({
                    data:data
                })
            }
        }
    )
    
})
// 商品筛选请求
app.post("/sort",function(req,res){
    // console.log(req.body)
    let size=[]
    let perfect=[]
    let brand=[]
    for(let key in req.body){
        if(isNaN(Number(req.body[key]))==false){
            size.push(Number(req.body[key]))
        }else{
            if(/[A-Z]/.test(req.body[key])==true){
                perfect.push(req.body[key])
            }else{
                brand.push(req.body[key])
            }
            
        }
    }
    let newBrand=[]
    brand.forEach(item=>{
        newBrand.push(item.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase()))    
    })
    shopTable.find({$and:[size.length!=0?{size:{"$in":size}}:{},perfect.length!=0?{perfect:{"$in":perfect}}:{},newBrand.length!=0?{brand:{"$in":newBrand}}:{}]}).limit(20).exec(
            (err,data)=>{
                if(data){
                    // console.log(data)
                    res.json({data:data})
                }else{
                    console.log(err)
                }
            }
        )
    
    
})
// 搜索接口
app.get("/search",function(req,res){
    console.log(req.query)
    let keywords=eval("/"+req.query.keywords+"/")
    shopTable.find({type:{"$in":[keywords]}}).skip(Number(req.query.offset)).limit(20).exec(
        (err,data)=>{
            if(data){
                console.log(data)
                res.json({
                    data:data,
                })
            }
        }
    )
})


app.post()














app.listen('3000', function (req, res) {
    console.log('3000服务器启动.......')
})