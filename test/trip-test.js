const chai = require('chai');
const expect = chai.expect;

import Trip from '../src/trip'
import TripsRepository from '../src/trips-repo'
import Traveler from '../src/traveler'
import {travelers, trips, destinations} from './/test-data.js'


describe('Trip', () => {

  let testTraveler
  let testTrip
  let testTripRepo

  beforeEach(() => {

    testTraveler = new Traveler(travelers[0])
    testTrip = new Trip(trips.trips[0])
    testTripRepo = new TripsRepository(trips, destinations)
    testTripRepo.createTrips()
    testTripRepo.findUserTrips(2)
    testTrip.siphonDestinationData(testTripRepo.destinations)
    testTripRepo.showDestinationNames()
    testTripRepo.totalTripCostPerUser()

})

it('should be a function', () => {
  expect(Trip).to.be.a('function')
})

it('should be able to instantiate a new trip', () => {
  // console.log(testTrip)
  expect(testTrip).to.be.an.instanceof(Trip)
})

it('should be able to convert a destination ID to the name of a destination', () => {
  expect(testTrip.destinationName).to.equal("Rome, Italy")
})

it('should be able to calculate its own total cost, given the number of travelers, destination, and duration', () => {
  expect(testTrip.totalCost).to.equal(9592)
})

it('should be able to grab the relevant destination image data and hold on to it', () => {
  expect(testTrip.imageAlt).to.equal("people standing inside a colosseum during the day")
})

it('should be able to calculate the trips end date, based on its start date and duration.', () => {
  // console.log(testTrip)
  expect(testTrip.endDate).to.equal('06/08/2022')
})

});
