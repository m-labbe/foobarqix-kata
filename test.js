const { expect } = require('chai')
const { compute } = require('./index.js')

describe('FooBarQix', () => {
    it('should return 1 for 1', () => {
        expect(compute(1)).to.equal(1)
    });

    it('should return Foo for 3', () => {
        expect(compute(3)).to.equal('Foo')
    })

    it('should return Foo for 6', () => {
        expect(compute(6)).to.equal('Foo')
    })

    it('should return Bar for 5', () => {
        expect(compute(5)).to.equal('Bar')
    })

    it('should return Bar for 10', () => {
        expect(compute(10)).to.equal('Bar')
    })

    it('should return FooBar for 15', () => {
        expect(compute(15)).to.equal('FooBar')
    })

    it('should return Qix for 7', () => {
        expect(compute(7)).to.equal('Qix')
    })

    it('should return Qix for 49', () => {
        expect(compute(49)).to.equal('Qix')
    })
});