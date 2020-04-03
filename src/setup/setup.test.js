const db = require('./db')

// one time setup
beforeAll(() => {})

// can use the same rules for async code
beforeEach(() => {
    db.populate()
})

afterEach(() => {
    console.log('after each test')
})

test('Test delete', () => {
    const deleted = db.delete(1)
    expect(deleted).toBeTruthy()
})

test('Test find', () => {
    const user = db.findById(1)
    expect(user).toHaveProperty('id')
})

describe('before and after scoped', () => {
    beforeEach(() => {
        console.log('this is scoped to this describe block')
    })

    test('fake test', () => {
        expect(true).toBeTruthy()
    })
})

// Jest executes all describe handlers in a test file before it executes any of the actual
// tests. This is another reason to do setup and teardown inside before* and after* handlers
//  rather than inside the describe blocks. Once the describe blocks are complete, by default
// Jest runs all the tests serially in the order they were encountered in the collection phase,
// waiting for each to finish and be tidied up before moving on.
