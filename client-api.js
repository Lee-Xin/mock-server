/**
 * 后台所有接口，需要在这里声明
 * get类型的接口，在getApi中添加
 * post类型的接口，在postApi中添加
 * 注：接口名需要与controller文件夹中的处理函数一一对应
 */
const getApi = {
    testGet: '/testGetApi'
}

const postApi = {
    testPost: '/testPostApi'
}

module.exports = {
    getApi, postApi
}
