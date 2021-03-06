const chai = require('chai');
const expect = chai.expect;

import dayjs from 'dayjs';
import Trip from '../src/trip'
import TripsRepository from '../src/trips-repo'
import Traveler from '../src/traveler'
import {
  travelers,
  trips,
  destinations
} from './/test-data.js'


describe('TripsRepository', () => {

  let testTripRepo

  beforeEach(() => {

    testTripRepo = new TripsRepository(trips, destinations)
    testTripRepo.createTrips()
    testTripRepo.findUserTrips(2)
    testTripRepo.showDestinationNames()
    testTripRepo.totalTripCostPerUser()
    testTripRepo.sortUserTrips('04/03/2020')


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
    expect(testTripRepo.userTrips[0].userID).to.equal(2)
  })

  it('should be able to hold onto destination data', () => {
    expect(testTripRepo.destinations[0].destination).to.equal('Lima, Peru')
  })

  it('should be able to return just the names of available destinations', () => {
    expect(testTripRepo.destinationNames[0]).to.equal('Lima, Peru')
  })

  it('should be able to find the total cost of all trips for a given user', () => {
    expect(testTripRepo.userTotalCost).to.equal(46682.9)
  })

  it('should be avle to sort user trips into past, pending, upcoming, or present based on their status and proximity to a given date', () => {
    expect(testTripRepo.pastTrips.length).to.equal(3)
  })

});
