// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// Imports
import Traveler from './traveler'
import Trip from './trip'
import TripsRepository from './trips-repo'
import { fetchTravelers, fetchSingleTraveler, fetchTrips, fetchDestinations }
  from './apiCalls';
import {pageLoadDom, submitForm} from './domUpdates'
import dayjs from 'dayjs';
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

import './css/base.scss';
import './images/turing-logo.png'
import './images/user.png'


// Global Variables

const today = '04/03/2020'
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


const postTrip = (data) => {
fetch('http://localhost:3001/api/v1/trips', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json',
  }
}).then(response => response.json())
  .then(json => console.log(json))
}



pageLoad()


const finishButton = document.querySelector('#finishButton')
const destinationPicker = document.querySelector('#destinationPicker')
const tripEstimation = document.querySelector('#tripEstimation')

// Event Listeners



finishButton.addEventListener('click', () => {
  submitForm(currentTraveler, tripRepo)
  MicroModal.close('modal-1')
  window.location.reload();
})


destinationPicker.addEventListener('input', () => {
  calculateProjectedTotal(tripRepo)
})



const calculateProjectedTotal = (tripRepo) => {
  const foundDestination = tripRepo.destinations.find((destination) => {
    return destination.destination === destinationPicker.value
  })
  let lodgingCost = ((foundDestination.estimatedLodgingCostPerDay * tripDuration.value) * travelerNumber.value)
  let flightCost = foundDestination.estimatedFlightCostPerPerson * travelerNumber.value
  let tripCost = lodgingCost + flightCost
  let agentFee = tripCost / 10
  let totalTripCost = tripCost + agentFee
  tripEstimation.innerHTML = `Estimated Trip Cost: $${totalTripCost}`
}




export { currentTraveler, tripRepo, today, postTrip }
