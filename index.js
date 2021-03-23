const mapToString = new Map([
    [3, 'Foo'],
    [5, 'Bar'],
    [7, 'Qix'],
])

const compute = (input) => {
    let output = ''
    mapToString.forEach((val, key) => {
        if(input % key === 0) {
            output += val
        }
    })
    return output === '' ? input : output
}

module.exports = {
    compute
}