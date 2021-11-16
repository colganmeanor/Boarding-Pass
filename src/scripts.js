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
    fetchSingleTraveler(num).then(response => response.json()).then(json => generateTraveler(json)).then(setTimeout(function () {
      pageLoad()
      mainPage.classList.remove('hidden')
      logInForm.classList.add('hidden')
    }, 100))
}


const pageLoad = () => {
  Promise.all([fetchTrips(), fetchDestinations()]).then(response => {
  generateTripRepo(response[0], response[1])
  console.log(tripRepo)
  setTimeout(function() {
    pageLoadDom(currentTraveler, tripRepo)
  }, 100)

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
  // console.log(tripRepo)
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
}).then(response => response.json());
  pageLoad();
}


// showLogInForm()


const finishButton = document.querySelector('#finishButton')
const destinationPicker = document.querySelector('#destinationPicker')
const tripEstimation = document.querySelector('#tripEstimation')
const clickHereToLogin = document.querySelector('#clickHereToLogin')
const errorSpace = document.querySelector('#errorSpace')
const userName = document.querySelector('#userName')

// Event Listeners

userName.addEventListener('input', () => {
  logInButton.disabled = false
})

logInButton.addEventListener('click', () => {
  checkCredentials()
  // MicroModal.close('modal-2')
})

const checkCredentials = () => {
  if (userName.value.includes('traveler') && userPassWord.value === 'travel'){
    let userNum = userName.value.replace(/[^0-9]/g,'')
    logIn(userNum)
  } else {
    errorSpace.innerHTML = `<p>Looks like the username or password wasn't quite right. Wanna try again?</p>`
  }
}



finishButton.addEventListener('click', () => {

  submitForm(currentTraveler, tripRepo)
  MicroModal.close('modal-1')
  pageLoad()
})


destinationPicker.addEventListener('input', () => {
  calculateProjectedTotal(tripRepo)
})


// clickHereToLogin.addEventListener('click', () => {
//   MicroModal.open('modal-2')
// })


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
