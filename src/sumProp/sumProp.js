const sumProp = (salaries = {}) => {
    let summSalaries = 0;
    for (let key in salaries) {
        summSalaries += salaries[key];
    }
    return summSalaries;
}


module.exports = sumProp;