const x = [1, 2, 3]

function sum3(a, b, c) {
    return a + b + c
}

const y = sum3(...x) // equivalent to sum3(1,2,3)
console.log(y) // 6

const f = [1, 2, 3]

const g = [4, ...f, 5] // [4,1,2,3,5]
console.log(g)
const h = [...f, ...g] // [1,2,3,4,1,2,3,5]
console.log(h)

const p = { some: 3, data: 5 }
const q = { more: 8, ...p }
console.log(q)

const numbers = [2, 2, 9, 6, 0, 1, 2, 4, 5, 6]
const minA = Math.min(...numbers) // 0
console.log(minA)

const maxArray = (arr) => Math.max(...arr)
const maxA = maxArray(numbers) // 9
console.log(maxA)
