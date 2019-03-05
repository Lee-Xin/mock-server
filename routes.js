const router = require('express').Router()

// 客户端接口，定义所有类型的接口（键值对），键名即接口名，和接口处理函数的名字相同（便于批量获取）
const clientApi = require('./client-api')

// 获取指定文件夹下所有文件的方法，返回Promise对象（异步）
const getFileName = require('./lib/getFileName')

// 存放接口处理函数的对象
let handleFunc = {}

getFileName('./controller').then(res => {
    // 读取文件
    res.forEach(file => {

        // 获取每个文件
        let fileName = file.split('.')[0];

        // 复制每个文件中的处理函数对象，存到handleFunc中
        Object.assign(handleFunc, require(`./controller/${fileName}`))
    })

    // 根据api接口名，匹配处理函数，并依次设置路由
    Object.keys(clientApi.getApi).forEach(apiKey => {

        if(handleFunc[apiKey]){
            router.get(clientApi.getApi[apiKey], handleFunc[apiKey])
        }
    })
    Object.keys(clientApi.postApi).forEach(apiKey => {

        if(handleFunc[apiKey]){
            router.post(clientApi.postApi[apiKey], handleFunc[apiKey])
        }
    })
}).catch(e => {
    console.log(e)
})

module.exports = router
