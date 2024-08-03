import { expect } from 'chai';
import { getCountLetter } from './count-letter.js';


describe('getCountLetter - basic functionality', () => {
    it('return an empty object when passed an empty string', () => {
        const expected = {};
        const actual = getCountLetter('');
        expect(actual).to.deep.equal(expected);
    })
    it('return an object with a count of 1 for each letter in the string', () => {
        const expected = { a: 1, b: 1, c: 1 };
        const actual = getCountLetter('abc');
        expect(actual).to.deep.equal(expected);
    })
})