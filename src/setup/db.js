let fakeData = []

exports.populate = () => {
    fakeData = [
        {
            id: 1,
            name: 'Felipe'
        },
        {
            id: 2,
            name: 'Fernandes'
        },
        {
            id: 3,
            name: 'Secato'
        }
    ]
}

exports.findById = (id) => {
    return fakeData.find((element) => element.id === id)
}

exports.insert = (element) => {
    fakeData.push(element)
    return true
}

exports.delete = (id) => {
    const index = fakeData.findIndex((e) => e.id === id)

    if (index !== -1) {
        fakeData.splice(index, 1)
        return true
    }

    return false
}
