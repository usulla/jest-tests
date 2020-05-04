const multiplyNumeric = require('./multiplyNumeric');

describe('multiplyNumeric', () => {
    it('multiply all numeric properties by 2', () => {
        let menu = {
            width: 200,
            height: 300,
            title: "My menu"
        };
        multiplyNumeric(menu);
        expect(menu.width).toBe(400);
        expect(menu.height).toBe(600);
        expect(menu.title).toBe("My menu");
    })
    it('return undefined if blank {}', () => {
        expect(multiplyNumeric({})).toBeUndefined();
    })
})