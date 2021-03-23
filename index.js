const mapToString = new Map([
    ['3', 'Foo'],
    ['5', 'Bar'],
    ['7', 'Qix'],
])

const compute = (input) => {
    let output = ''
    const numbers = Array.from(mapToString.keys())
    const vals = Array.from(mapToString.values())
    mapToString.forEach((val, key) => {
        if(input % parseInt(key) === 0) {
            output += val
        }
    })
    input.toString().split('').forEach((char, i) => {
        if(numbers.includes(char)) {
            output += vals[numbers.indexOf(char)]
        }
    })
    return output === '' ? input : output
}

const foobarqix = () => {
    for (let i=1; i < 101; i++) {
        console.log(compute(i))
    }
}

module.exports = {
    compute,
    foobarqix,
}