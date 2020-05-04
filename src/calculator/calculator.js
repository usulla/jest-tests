let calculator = {
    read(val1, val2) {
        this.val1 = val1;
        this.val2 = val2;
    },
    sum() {
        return this.val1 + this.val2;
    },
    mult() {
        return this.val1 * this.val2;
    }
};

module.exports = calculator;