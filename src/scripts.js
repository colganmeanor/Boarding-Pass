// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// Imports
import Traveler from './traveler'
import Trip from './trip'
import TripsRepository from './trips-repo'
import { fetchTravelers, fetchSingleTraveler, fetchTrips, fetchDestinations }
  from './apiCalls';
import pageLoadDom from './domUpdates'
import './css/base.scss';
import './images/turing-logo.png'


// Global Variables

const today = '2020/04/03'
let currentTraveler
let tripRepo

console.log('This is the JavaScript entry file - your code begins here.');




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
