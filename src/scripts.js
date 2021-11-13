// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// Imports
import Traveler from './traveler'
import Trip from './trip'
import TripsRepository from './trips-repo'
import { fetchTravelers, fetchSingleTraveler, fetchTrips, fetchDestinations }
  from './apiCalls';
import './css/base.scss';
import './images/turing-logo.png'


// Global Variables

const today = '2020/04/09'
let currentTraveler
let tripRepo

console.log('This is the JavaScript entry file - your code begins here.');

// Query Selectors

const headerMessage = document.querySelector('#splashMessage')


// Functions

const pageLoad = () => {
  fetchData()

}

const fetchData = () => {
  Promise.all([fetchSingleTraveler, fetchTrips, fetchDestinations]).then(values => {
    return Promise.all(values.map(result => result.json()));
  }).then(values => {
    generateTraveler(values[0])
    generateTripRepo(values[1].trips, values[2].destinations)
    tripRepo.createTrips()
    tripRepo.findUserTrips(currentTraveler.id)
    updateHeaderMessage()
  })
}


// generateTraveler(values[0])
// generateTripRepo(values[1], values[2])

const generateTraveler = (data) => {
  currentTraveler = new Traveler(data)
}

const generateTripRepo = (tripData, destinationData) => {
  tripRepo = new TripsRepository(tripData, destinationData)
}

const updateHeaderMessage = () => {
  headerMessage.innerText = `Welcome back ${currentTraveler.name}`
}


// Event Listeners

window.addEventListener('load', pageLoad);
