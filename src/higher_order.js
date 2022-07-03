function negate(func) {
    return function() {
        // Use the Function.apply to execute 
        // this function against the original arguments
        return !func.apply(null, arguments)
    }
}

function isNull(val) {
    return val === null
}

// Defines the function isNotNull as the negation of isNull
const isNotNull = negate(isNull) 
console.log(isNotNull(null))
console.log(isNotNull({}))
