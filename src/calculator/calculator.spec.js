const calculator = require('./calculator');

describe('calculator', () => {
    // it('read() 2 values and save them as properties of {}', () => {
    //     calculator.read(2,5);
    //     expect(calculator).
    // });
    it('sum() return sum of saved values', () =>{
        calculator.read(2,5);
        expect(calculator.sum()).toBe(7);
    });
    it('mult() return multiply of saved values', () =>{
        calculator.read(2,5);
        expect(calculator.mult()).toBe(10);
    })
})