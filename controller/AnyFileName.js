/**
 * 引入handle函数统一处理请求
 */
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

// 注：接口处理函数名，必须和routes.js中的接口名一一对应
module.exports = {
    testGet, testPost
}
