const Lodash = require('./sync')
let _ = new Lodash()

describe('Lodash: compact', () => {
    let array
    beforeEach(() => {
        array = [false, 42, 0, '', true, null, 'hello']
    })
    test('should be defined', () => {
        expect(_.compact).toBeDefined()
        expect(_.compact).not.toBeUndefined()
    })
    test('should remove falsy values from array', () => {
        const result = [42, true, 'hello']
        expect(_.compact(array)).toEqual(result)
    })
    test('should NOT contain falsy values', () => {
        const falsy = false || 0 || '' || null
        expect(_.compact(array)).not.toContain(falsy)
    })
})

describe('Lodash group by', () => {
    test('should be defined', () => {
        expect(_.groupBy).toBeDefined()
        expect(_.groupBy).not.toBeUndefined()
    })
    test('should group array items by Math.floor', () => {
        const array = [2.2, 2.4, 4.2, 3.1]
        const result = {
            2:[2.2, 2.4],
            4:[4.2],
            3:[3.1]
        }
        expect(_.groupBy(array, Math.floor)).toEqual(result)
    })
    test('should group array items by length', () => {
        const array = ['one', 'two', 'three'];
        const result = {
            5:['three'],
            3:['one', 'two']
        }
        expect(_.groupBy(array, 'length')).toEqual(result)
    })
    test('should NOT return array', () => {
        const array = ['one', 'two', 'three'];
        const result = {
            5:['three'],
            3:['one', 'two']
        }
        expect(_.groupBy([], Math.trunk)).not.toBeInstanceOf(Array)
    })
})