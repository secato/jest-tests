const axios = require('axios')

function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index])
    }
}

function getAllUsers() {
    return axios.get('/users.json').then((resp) => resp.data)
}

module.exports = {
    forEach,
    getAllUsers,
}
