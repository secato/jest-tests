const sum = require('./sum')

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
})

test('Sum vs native sum', () => {
    let a = Math.random() * 100
    let b = Math.random() * 100
    expect(sum(a, b)).toBe(a + b)
})
