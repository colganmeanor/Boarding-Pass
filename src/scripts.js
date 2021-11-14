// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// Imports
import Traveler from './traveler'
import Trip from './trip'
import TripsRepository from './trips-repo'
import { fetchTravelers, fetchSingleTraveler, fetchTrips, fetchDestinations }
  from './apiCalls';
import pageLoadDom from './domUpdates'
import dayjs from 'dayjs';
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

import './css/base.scss';
import './images/turing-logo.png'


// Global Variables

const today = '04/03/2020'
let currentTraveler
let tripRepo

console.log('This is the JavaScript entry file - your code begins here.');

// let dayJSTest = dayjs(today).subtract(2, 'days').format('YYYY/MM/DD')
// console.log(today)
// console.log(dayJSTest)

// let testDate = '04/03/2019'
//
// // let testResult = dayjs(testDate).from(dayjs(today))
// // console.log(testResult)
// console.log(today < testDate)




// Functions



const pageLoad = () => {
  Promise.all([fetchSingleTraveler, fetchTrips, fetchDestinations]).then(values => {
    return Promise.all(values.map(result => result.json()));
  }).then(values => {
    generateClasses(values[0], values[1], values[2])
    pageLoadDom(currentTraveler, tripRepo)
  })
}


// generateTraveler(values[0])
// generateTripRepo(values[1], values[2])

const generateClasses = (travelerData, tripData, destinationData) => {
  generateTraveler(travelerData);
  // console.log(currentTraveler)
  generateTripRepo(tripData, destinationData)
}

const generateTraveler = (data) => {
  currentTraveler = new Traveler(data)
}

const generateTripRepo = (tripData, destinationData) => {
  tripRepo = new TripsRepository(tripData, destinationData)
  tripRepo.createTrips()
  tripRepo.findUserTrips(currentTraveler.id)
  tripRepo.totalTripCostPerUser()
  tripRepo.showDestinationNames()
  tripRepo.sortUserTrips(today)
}


pageLoad()


// Event Listeners

export default { currentTraveler, today }
