var app = require('./bin/web.js')
var fs = require('fs')
var multer = require('multer')
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
var shopTable = allMongo.shopTable
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
// 用户数据存储
var userTable = allMongo.userTable
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
            cateData = data
            res.json({
                data: cateData
            })
        } else {
            console.log(err)
        }
    })

})
// 商品获取接口
app.get("/all", function (req, res) {
    // console.log(req.query)
    shopTable.find().skip(Number(req.query.offset)).limit(20).exec((err, data) => {
        if (data) {
            res.json({
                data: data
            })
        }
    })
})
// 商品分类请求
app.post("/cateData", function (req, res) {
    shopTable.find({ class: req.body.cateName }).exec(
        (err, data) => {
            if (data) {
                res.json({
                    data: data
                })
            }
        }
    )

})
// 商品筛选请求
app.post("/sort", function (req, res) {
    // console.log(req.body)
    let size = []
    let perfect = []
    let brand = []
    for (let key in req.body) {
        if (isNaN(Number(req.body[key])) == false) {
            size.push(Number(req.body[key]))
        } else {
            if (/[A-Z]/.test(req.body[key]) == true) {
                perfect.push(req.body[key])
            } else {
                brand.push(req.body[key])
            }

        }
    }
    let newBrand = []
    brand.forEach(item => {
        newBrand.push(item.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase()))
    })
    shopTable.find({ $and: [size.length != 0 ? { size: { "$in": size } } : {}, perfect.length != 0 ? { perfect: { "$in": perfect } } : {}, newBrand.length != 0 ? { brand: { "$in": newBrand } } : {}] }).limit(20).exec(
        (err, data) => {
            if (data) {
                // console.log(data)
                res.json({ data: data })
            } else {
                console.log(err)
            }
        }
    )


})
// 搜索接口
app.get("/search", function (req, res) {
    console.log(req.query)
    let keywords = eval("/" + req.query.keywords + "/")
    shopTable.find({ type: { "$in": [keywords] } }).skip(Number(req.query.offset)).limit(20).exec(
        (err, data) => {
            if (data) {
                console.log(data)
                res.json({
                    data: data,
                })
            }
        }
    )
})
// 发送短信验证
var yanzhengma
app.post("/sendcode", function (req, result) {
    let code = parseInt((Math.random() * 9 + 1) * 100000);
    yanzhengma = code
    /**
 * 云通信基础能力业务短信发送、查询详情以及消费消息示例，供参考。
 * Created on 2017-07-31
 */
    const SMSClient = require('@alicloud/sms-sdk')
    // ACCESS_KEY_ID/ACCESS_KEY_SECRET 根据实际申请的账号信息进行替换
    const accessKeyId = 'LTAI4G341axzaoAfjUJQ85uE'
    const secretAccessKey = 'I3Gv5fsKXPncdxo4NJS0VXsi7fqs5x'
    //初始化sms_client
    let smsClient = new SMSClient({ accessKeyId, secretAccessKey })
    //发送短信
    smsClient.sendSMS({
        PhoneNumbers: req.body.phoneumber,
        // 必填: 待发送手机号。支持以逗号分隔的形式进行批量调用，批量上限为1000个手机号码, 批量调用相对于单条调用及时性稍有延迟, 验证码类型的短信推荐使用单条调用的方式；发送国际/ 港澳台消息时，接收号码格式为：国际区号 + 号码，如“85200000000”
        SignName: '95分',
        // 必填: 短信签名 - 可在短信控制台中找到
        TemplateCode: 'SMS_194920164',
        // 必填: 短信模板 - 可在短信控制台中找到，发送国际 / 港澳台消息时，请使用国际 / 港澳台短信模版
        TemplateParam: '{"code":' + code + '}'
        // 可选: 模板中的变量替换JSON串, 如模板内容为"亲爱的${name},您的验证码为${code}"时。
    }).then(function (res) {
        let { Code } = res
        if (Code === 'OK') {
            //处理返回参数
            console.log(res)
            result.json({
                msg: "发送成功"
            })
        }
    }, function (err) {
        console.log(err)
    })
})
// 登录&&注册
app.post("/login", function (req, res) {
    if (req.body.code == yanzhengma) {
        userTable.find({ phone: req.body.tel }).exec(
            (err, data) => {
                console.log(data)
                if (data.length == 0) {
                    var userItem = new userTable({
                        photo: "http://localhost:3000/photo/default.png",
                        nickName: "",
                        phone: req.body.tel,
                        realName: "",
                        zhifubao: "",
                    })
                    userItem.save((err2, data2) => {
                        if (data) {
                            console.log(data2)
                            res.json({ msg: "首次登录，已自动注册", userinfo: data2 })
                        } else {
                            console.log(err2)
                        }
                    })
                } else {
                    res.json({ msg: "登录成功", userinfo: data[0] })
                }
            }
        )
    } else {
        res.json({ msg: "验证码不正确" })
    }
})
// 查询登录信息
app.post("/searchLoginUser", function (req, res) {
    console.log(req.body)
    userTable.findById(req.body.userId).exec(
        (err, data) => {
            console.log(data)
            res.json({ data: data })
        }
    )
})

// 修改信息
// 设置上传图片的配置信息
var photoStorage = multer.diskStorage({
    // 图片上传的路径
    destination: function (req, file, callback) {
        callback(null, './public/photo')
    },
    // 图片的名称
    filename: function (req, file, callback) {
        // 图片的原始名称
        callback(null, file.originalname)
    }
})
var photoConfig = multer({ storage: photoStorage })

app.post("/updateUser", photoConfig.single('PIC'), function (req, res) {
    console.log(req.file)
    console.log(req.body)
    userTable.find({ phone: req.body.TEL }).count().exec((err, data) => {
        if (data == 0) {
            if (req.body.PIC == "") {
                userTable.findByIdAndUpdate(req.body.userId, { phone: req.body.TEL }).exec(
                    (err, data) => {
                        // console.log(data)
                    }
                )
                userTable.findByIdAndUpdate(req.body.userId, { nickName: req.body.NICK }).exec(
                    (err, data) => {
                        // console.log(data)
                    }
                )
                res.json({ msg: "修改成功" })
            } else {
                userTable.findByIdAndUpdate(req.body.userId, { photo: "http://localhost:3000/photo/" + req.file.filename }).exec(
                    (err, data) => {
                        // console.log(data)
                    }
                )
                userTable.findByIdAndUpdate(req.body.userId, { phone: req.body.TEL }).exec(
                    (err, data) => {
                        // console.log(data)
                    }
                )
                userTable.findByIdAndUpdate(req.body.userId, { nickName: req.body.NICK }).exec(
                    (err, data) => {
                        // console.log(data)
                    }
                )
                res.json({ msg: "修改成功" })
            }
        }else{
            res.json({ msg: "该手机号已被其他" })
        }
    })

})







app.listen('3000', function (req, res) {
    console.log('3000服务器启动.......')
})