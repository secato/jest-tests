test('expect to be', () => {
    let a = 'a'
    let num = 2

    expect(!!a).toBe(true)
    expect(2 + 2).toBe(4)
    expect(num + a).toBe('2a')
})

test('object assignment', () => {
    const obj1 = { name: 'Felipe' }
    const obj2 = { name: 'Felipe' }
    const obj3 = { name: 'Felipe', age: 23 }

    expect(obj1).toEqual(obj2)

    // toEqual recursively checks every field of an object or array
    // expect(obj1).toEqual(obj2) // will fail

    expect(obj3).toMatchObject(obj1)
})

test('expect not to be', () => {
    expect(typeof 'test').not.toBe('number')
})

test('null', () => {
    const n = null
    expect(n).toBeNull()
    expect(n).toBeDefined()
    expect(n).not.toBeUndefined()
    expect(n).not.toBeTruthy()
    expect(n).toBeFalsy()
})

test('zero', () => {
    const z = 0
    expect(z).not.toBeNull()
    expect(z).toBeDefined()
    expect(z).not.toBeUndefined()
    expect(z).not.toBeTruthy()
    expect(z).toBeFalsy()
})

test('empty array', () => {
    const arr = []
    expect(arr.length).toBeFalsy()
    expect(arr).not.toBeFalsy()
})

// number matchers
test('two plus two', () => {
    const value = 2 + 2
    expect(value).toBeGreaterThan(3)
    expect(value).toBeGreaterThanOrEqual(3.5)
    expect(value).toBeLessThan(5)
    expect(value).toBeLessThanOrEqual(4.5)

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4)
    expect(value).toEqual(4)
})

test('adding floating point numbers', () => {
    const value = 0.1 + 0.2
    //expect(value).toBe(0.3);           This won't work because of rounding error
    expect(parseFloat(value.toFixed(1))).toBe(0.3)
    expect(value).toBeCloseTo(0.3) // This works.
})

// string
test('there is no I in team', () => {
    // to match allows to use regex
    expect('team').not.toMatch(/I/)
})

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/)
})

test('Word ignore case', () => {
    expect('FeLiPe').toMatch(/felipe/i)
})

// arrays and iterables
const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer'
]

test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer')
    expect(new Set(shoppingList)).toContain('beer')
})

function compileAndroidCode() {
    throw new Error('you are using the wrong JDK')
}

test('compiling android goes as expected', () => {
    expect(compileAndroidCode).toThrow()
    expect(compileAndroidCode).toThrow(Error)

    // You can also use the exact error message or a regexp
    expect(compileAndroidCode).toThrow('you are using the wrong JDK')
    expect(compileAndroidCode).toThrow(/JDK/)
})
