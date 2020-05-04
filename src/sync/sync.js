class Lodash {
    compact(array) {
        return array.filter(item => !!item)
    }
    groupBy(array, prop) {
      return array.reduce((acc, i) => {
          console.log(i[prop], 'll')
        const key = typeof prop === 'function' ? prop(i) : i[prop]
           
            if(!acc[key]){
                acc[key] = [];
            }
            acc[key].push(i)
            return acc
        }, {})
    }
}
module.exports = Lodash;