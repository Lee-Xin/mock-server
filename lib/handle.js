/**
 * 统一处理请求函数
 * @param req
 * @param res
 */

// 设置跨域
const setHeader = (res) => {
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "content-type");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
}
const send401 = (req, res) => {
    setHeader(res)
    let data = {
        status: 401,
        description: '您的登录状态已失效，请重新登录'
    };
    res.status(401).send(data).end();
}
const send404 = (req, res) => {
    setHeader(res)
    let data = {
        status: 404,
        description: '404 Not Found'
    };
    res.status(404).send(data).end();
}
const send500 = (req, res, msg) => {
    setHeader(res)
    let data = {
        status: 500,
        description: msg || '404 Not Found'
    };
    res.status(500).send(data).end();
}
const sendSuccess = (req, res, data) => {
    setHeader(res)
    res.status(200).send(data).end();
}
const sendFailure = (req, res, err) => {
    setHeader(res)
    res.status(200).send(err).end();
}

module.exports = {
    send401,
    send404,
    send500,
    sendSuccess,
    sendFailure
}
