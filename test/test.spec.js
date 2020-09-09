import { randomArray } from '../index.js'
import { expect } from 'chai'

describe('randomArray()', function () {

  const elementsWithin = (min, max) => arr => arr.every(n => expect(n).to.be.within(min, max))

  it('should return an empty array when length is less than 1', function () {
    expect(randomArray(0)).to.be.an('array').that.is.empty
    expect(randomArray(-2)).to.be.an('array').that.is.empty
  })

  it('should return an array with random numbers of specific length and range', function () {
    expect(randomArray(10)).to.be.an('array').that.has.lengthOf(10).that.satisfies(elementsWithin(1, 10))
    expect(randomArray(6, [1, 15])).to.be.an('array').that.has.lengthOf(6).that.satisfies(elementsWithin(1, 15))
  })

})