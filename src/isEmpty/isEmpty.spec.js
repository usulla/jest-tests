const isEmpty = require('./isEmpty');
describe("isEmpty", () => {
    it("возвращает true для пустого объекта", () => {
        expect(isEmpty({})).toBe(true);
    });

    it("возвращает false, если свойство существует", () => {
        expect(isEmpty({ anything: "anything" })).toBe(false);
    });
});