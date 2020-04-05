const { forEach, getAllUsers } = require('./mock')
const axios = require('axios')
jest.mock('axios')

test('Test mock function', () => {
    const mockCallback = jest.fn((x) => 42 + x)
    forEach([0, 1], mockCallback)

    // the mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(2)

    // the first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0)

    // The first argument of the second call to function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1)

    // The return value of the first call to the function was 42
    expect(mockCallback.mock.results[0].value).toBe(42)
})

// mock property contains the data about how the function has been called
// and what the function returned is kept

test('Mock return values', () => {
    const myMock = jest.fn()

    myMock
        .mockReturnValueOnce(10)
        .mockReturnValueOnce('x')
        .mockReturnValue(true)

    expect(myMock()).toBe(10)
    expect(myMock()).toBe('x')
    expect(myMock()).toBe(true)
    expect(myMock()).toBe(true)
})

test('Mock module', () => {
    const users = [{ name: 'Felipe' }]
    const resp = { data: users }
    axios.get.mockResolvedValue(resp)

    return getAllUsers().then((data) => expect(data).toEqual(users))
})
