userTable.find((err,data)=>{
    console.log(data)
    data.forEach((item)=>{
        console.log("item",item)
        userTable.findByIdAndUpdate(item._id,{bnanlce:"99.9"}).exec(
            (err,data3)=>{
                console.log(data3)
            }
        )
    })
})