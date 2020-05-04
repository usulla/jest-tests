const ladder = require('./ladder');

describe('ladder', () => {
    beforeAll(() => {
        window.alert = jest.fn();
    });
    beforeEach(() => {
        ladder.step = 0;
    })
    it('up() should return this', () => {
        expect(ladder.up()).toBe(ladder);
    });
    it('up() should increase the steps', () => {
        ladder.up();
        expect(ladder.step).toBe(1);
    });
    it('down() should return this', () => {
        expect(ladder.down()).toBe(ladder);
    })
    it('down() should reduce the steps', () => {
        ladder.down();
        expect(ladder.step).toBe(-1);
    })
    it('showStep() should call alert', () => {
        ladder.showStep();
        expect(window.alert.mock.calls.length).toBe(1);
    })
    it('down().up().up().up()', () => {
        ladder.down().up().up().up();
        expect(ladder.step).toBe(2);
    })
    afterAll(() => {
        ladder.step = 0;
        mockClear();
    });
})