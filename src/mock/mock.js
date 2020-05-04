// function map(array, callback) {
//     let result = [];
//     array.forEach(item => {
//         result.push(callback(item))
//     })

//     return result
// }

function map(array, callback) {
    const result = [];
    for (let i=0; i < array.length; i++) {
        result.push(callback(array[i]))
    }
    return result;
}

module.exports = {map}