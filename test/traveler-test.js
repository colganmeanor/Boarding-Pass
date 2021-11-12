const chai = require('chai');
const expect = chai.expect;

import Trip from '../src/trip'
import Traveler from '../src/traveler'
import {travelers, trips} from './/test-data.js'


describe('Traveler', () => {

  let testTraveler

  beforeEach(() => {

    testTraveler = new Traveler(travelers[0])

})

it('should be a function', () => {
  expect(Traveler).to.be.a('function')
})

it('should be able to instantiate a new traveler', () => {
  expect(testTraveler).to.be.an.instanceof(Traveler)
})

});
