/**
 * 读取文件夹下的所有文件
 */
const fs = require('fs')

module.exports = (foldPath) => {
    return new Promise((resolve, reject) => {
        fs.readdir(foldPath, (err, files) => {
            if(err){
                reject(err)
            } else {
                resolve(files)
            }
        })
    })
}
