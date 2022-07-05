// only the inner function can access count === module pattern
const counter = (function (initialValue = 0) {
    let count = initialValue
    return function () {
        count++
        return count
    }
})(77)

console.log(counter())
console.log(counter())
console.log(counter())
