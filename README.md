## 安装

```sh
$ git clone https://github.com/Lee-Xin/mock-server.git

$ cd mock-server && npm install
```

## 启动

```sh
$ npm run mock

# 服务器默认地址为http://localhost:3000
```

## 使用方法

### ①：添加接口

在'client-api.js'中配置接口。注意：接口名和②要增加的接口处理函数名相同

client-api.js文件：
```javascript
const getApi = {
    testGet: '/testGetApi'
}

const postApi = {
    testPost: '/testPostApi',
    testPost2: '/testPostApi2' // 新增url为 http://localhost:3000/testPostApi2的接口。名称"testPost2"和第②步的方法名相同
}

module.exports = {
    getApi, postApi
}
```

### ②：添加接口处理函数

在'/controller/***.js'中添加接口处理函数。注意：该文件名可自定义，其中的方法须和①配置的接口名相同

/controller/AniyFileName.js文件：
```javascript
const handle = require('../lib/handle')

const testGet = (req, res) => {
    handle.sendSuccess(req, res, {
        code: 'req-success',
        success: true,
        msg: 'Request successfully !'
    })
}
const testPost = (req, res) => {
    handle.sendFailure(req, res, {
        code: 'req-fail',
        success: false,
        msg: 'Request failed'
    })
}

// 这个是新加的接口处理函数
const testPost2 = (req, res) => {
    handle.sendFailure(req, res, {
        data: {
         ...
        }
    })
}

module.exports = {
    testGet, testPost, testPost2 // 和新加的接口名相同
}
```


