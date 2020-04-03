const async = require('./async')

test('Test async callback', (done) => {
    async.fetch('https://jestjs.io/docs/en/asynchronous', (result) => {
        expect(result).toBe('success')
        done()
    })
})

test('Test promises', () => {
    // return the promise and jest will get by
    return async
        .readFile('asdsa')
        .then((result) => {
            expect(result).toBe('node_modules')
        })
        .catch((e) => {
            expect(e.code).toBe('ENOENT')
        })
})

test('Promise reject', () => {
    return expect(async.readFile('dsadsa')).rejects.toThrow()
})

// test('Async await', async () => {
//     const data = async.readFile('../../.gitignore')
//     expect(data).toBe('node_modules')
// })

// test('the data is peanut butter', async () => {
//     await expect(fetchData()).resolves.toBe('peanut butter');
//   });

//   test('the fetch fails with an error', async () => {
//     await expect(fetchData()).rejects.toThrow('error');
//   });
