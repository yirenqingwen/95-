// userTable.find((err,data)=>{
//     console.log(data)
//     data.forEach((item)=>{
//         console.log("item",item)
//         userTable.findByIdAndUpdate(item._id,{bnanlce:"99.9"}).exec(
//             (err,data3)=>{
//                 console.log(data3)
//             }
//         )
//     })
// })

function fun(n, o) {
    console.log(o)
    return {
        fun: function (m) {
            return fun(m, n);
        }
    };
}
var a = fun(0); a.fun(1); a.fun(2); a.fun(3);//undefined,?,?,?
var b = fun(0).fun(1).fun(2).fun(3);//undefined,?,?,?
var c = fun(0).fun(1); c.fun(2); c.fun(3);//undefined,?,?,?
function fun(n, o) {
    console.log(o)
    return {
        fun: function (m) {
            return fun(m, n);
        }
    };
}
var a = fun(0); a.fun(1); a.fun(2); a.fun(3);//undefined,?,?,?
var b = fun(0).fun(1).fun(2).fun(3);//undefined,?,?,?
var c = fun(0).fun(1); c.fun(2); c.fun(3);//undefined,?,?,?
