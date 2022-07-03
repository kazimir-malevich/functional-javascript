const outerVar = 'Outer'
function makeInner(params) {
    const innerVar = 'Inner'
    function inner() {
        console.log(`I can see: ${outerVar}, ${innerVar}, and ${params}`)
    }
    return inner
}

const inner = makeInner('Params')
inner()
