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
import MicroModal from 'micromodal';
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

const logInForm = document.querySelector('#logInForm')
const mainPage = document.querySelector('#mainPage')

const showLogInForm = () => {
  logInForm.classList.remove('hidden')
}



const logIn = (num) => {
  Promise.all([fetchSingleTraveler(num)]).then(values => {
    return Promise.all(values.map(result => result.json()));
  }).then(values => {
    generateTraveler(values[0])
    pageLoad()
    mainPage.classList.remove('hidden')
    logInForm.classList.add('hidden')
})
}

const pageLoad = () => {
  Promise.all([fetchTrips, fetchDestinations]).then(values => {
    return Promise.all(values.map(result => result.json()));
  }).then(values => {
    generateTripRepo(values[0], values[1])
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
  console.log(currentTraveler)
}

const generateTripRepo = (tripData, destinationData) => {
  tripRepo = new TripsRepository(tripData, destinationData)
  console.log(tripRepo)
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


showLogInForm()


const finishButton = document.querySelector('#finishButton')
const destinationPicker = document.querySelector('#destinationPicker')
const tripEstimation = document.querySelector('#tripEstimation')

// Event Listeners

logInButton.addEventListener('click', () => {
  let userNum = userName.value.replace(/[^0-9]/g,'')
  logIn(userNum)
})


finishButton.addEventListener('click', () => {
  submitForm(currentTraveler, tripRepo)
  MicroModal.close('modal-1')
  pageLoad()
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
