// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import Traveler from './traveler'
import Trip from './trip'
import TripsRepository from './trips-repo'
import { fetchTravelers, fetchSingleTraveler, fetchTrips, fetchDestinations }
  from './apiCalls';
import './css/base.scss';


// Global Variables

const today = '2020/04/09'
let currentTraveler
let tripRepo


// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


console.log('This is the JavaScript entry file - your code begins here.');

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
    console.log(tripRepo)
  }).then(
    // tripRepo.createTrips()
    // tripRepo.findUserTrips(currentTraveler.id)

  )
}

// generateTraveler(values[0])
// generateTripRepo(values[1], values[2])

const generateTraveler = (data) => {
  currentTraveler = new Traveler(data)
}

const generateTripRepo = (tripData, destinationData) => {
  tripRepo = new TripsRepository(tripData, destinationData)
}

// Event Listeners

window.addEventListener('load', pageLoad);
