const express = require('express')
const app = express()

// 使用routes文件批量设置路由
app.use('/', require('./routes'))

app.listen(3000, () => console.log('App listening on port 3000'))
