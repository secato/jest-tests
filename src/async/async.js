// Failing in my machine wich node v13.11.0 (kde neon) ??????
// const fs = require('fs').promises

const fs = require('fs')
const util = require('util')
const readFile = util.promisify(fs.readFile)

exports.fetch = (url, cb) => {
    setTimeout(() => {
        cb('success')
    }, 1000)
}

exports.post = (url, cb) => {
    setTimeout(() => {
        cb('failed')
    }, 2000)
}

exports.readFile = (file) => {
    return readFile(file)
}

// module.exports.readFile('../../.gitignore').then((result) => {
//     console.log(result)
// })

readFile('./async.js')
    .then((result) => {
        console.log(result)
    })
    .catch((e) => {
        console.log(e)
    })
