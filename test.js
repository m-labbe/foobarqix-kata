const { compute } = require('./index.js')

describe('FooBarQix', () => {
    it('should return 1 for 1', () => {
        expect(compute(1)).toEqual(1)
    });

    it('should return Foo for 3', () => {
        expect(compute(3)).toEqual('Foo')
    })

    it('should return Foo for 6', () => {
        expect(compute(6)).toEqual('Foo')
    })
});