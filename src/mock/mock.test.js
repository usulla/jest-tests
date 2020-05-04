const { map } = require('./mock')

describe('Map functin', () => {
    let array
    let fn
    beforeEach(() => {
        array = [1, 2, 3, 5]
        fn = jest.fn(x => x ** 2);
        map(array, fn);   
    })
    test('should call callback', () => {
        expect(fn).toBeCalled();
    })
    test('should call callback 4 times', () => {
        expect(fn).toHaveBeenCalledTimes(4)
        expect(fn.mock.calls.length).toBe(4)
    })
    test('should pow 2 each element', () => {
        //???
        setTimeout(function(){
        expect(fn.mock.results[0].value).toBe(1)}, 150)
    })
    test('should fn work', () => {
        fn
        .mockReturnValueOnce(100)
        .mockReturnValueOnce(200)
        .mockReturnValue(42)
        expect(fn()).toBe(100)
        expect(fn()).toBe(200)
        expect(fn()).toEqual(42)
        expect(fn()).toBe(42)
    })
})