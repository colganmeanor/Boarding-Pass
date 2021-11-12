const chai = require('chai');
const expect = chai.expect;

import Trip from '../src/trips'
import Traveler from '../src/traveler'
import {travelers, trips} from './/test-data.js'


describe('Trip', () => {

  let testTraveler
  let testTrip

  beforeEach(() => {

    testTraveler = new Traveler(travelers[0])
    testTrip = new Trip(trips[0])

})

it('should be a function', () => {
  expect(Trip).to.be.a('function')
})

it('should be able to instantiate a new trip', () => {
  // console.log(testTrip)
  expect(testTrip).to.be.an.instanceof(Trip)
})

// it('should be able to find all trips for a given user', () => {
//   expect(testTrip.findUserTrips(1)).to.equal('result')
// })

});
