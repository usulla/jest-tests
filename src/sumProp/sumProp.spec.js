const sumProp = require('./sumProp');

describe('SumProp should return', () => {
    it('summ of properties if not blank object', () => {
        const salaries = {
            John: 100,
            Ann: 160,
            Pete: 130
        }
        expect(sumProp(salaries)).toBe(390);
    });
    it('0 if blank object', () => {
        expect(sumProp({})).toBe(0);
    })
})