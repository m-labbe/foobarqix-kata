const { expect } = require('chai');
const { compute } = require('./index.js');

describe('FooBarQix', () => {
    it('should return 1 for 1', () => {
        expect(compute(1)).to.equal(1);
    });
});