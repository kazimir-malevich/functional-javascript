const altSum3 = (x) => (y) => (z) => x + y + z

console.log(altSum3(1)(2)(3))

const fn1 = altSum3(1)
console.log(fn1)
const fn2 = fn1(2)
console.log(fn2)
const fn3 = fn2(3)
console.log(fn3)
