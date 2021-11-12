const chai = require('chai');
const expect = chai.expect;

import Trip from '../src/trip'
import TripsRepository from '../src/trips-repo'
import Traveler from '../src/traveler'
import {travelers, trips, destinations} from './/test-data.js'


describe('TripsRepository', () => {

  let testTripRepo

  beforeEach(() => {

  testTripRepo = new TripsRepository(trips, destinations)
  testTripRepo.createTrips()
  testTripRepo.findUserTrips(1)


})

it('should be a function', () => {
  expect(TripsRepository).to.be.a('function')
})

it('should be able to instantiate a new trip repo', () => {
  expect(testTripRepo).to.be.an.instanceof(TripsRepository)
})

it('should be able to create new instances of the trip class', () => {
    expect(testTripRepo.trips[0]).to.be.an.instanceof(Trip)
})

it('should be able to return trips for the current user', () => {
  expect(testTripRepo.userTrips[0].userID).to.equal(1)
})

// it('should be able to return a list of destination names', () => {
//   expect(testTripRepo.)
// })

});
