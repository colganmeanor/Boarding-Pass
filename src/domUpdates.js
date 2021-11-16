import dayjs from 'dayjs';
import MicroModal from 'micromodal';
// var MicroModal = require('micromodal')
import {
  postTrip
} from './scripts'
import datepicker from 'js-datepicker'

// console.log(currentTraveler)

// Query Selectors

const headerMessage = document.querySelector('#splashMessage')
const upcomingColumn = document.querySelector('#upcomingColumn')
const pendingColumn = document.querySelector('#pendingColumn')
const pastColumn = document.querySelector('#pastColumn')
const presentTripWindow = document.querySelector('#presentTripWindow')
const headerButton = document.querySelector('#addNewTripButton')
const bodyButton = document.querySelector('#addNewTripButtonBody')
const modalContinueOne = document.querySelector('#continueButtonOne')
const modalWindowOne = document.querySelector('.modal-1-window-1')
const modalWindowTwo = document.querySelector('.modal-1-window-2')
const modalWindowThree = document.querySelector('.modal-1-window-3')
const modalWindowFour = document.querySelector('.modal-1-window-4')
const modalWindowFive = document.querySelector('.modal-1-window-5')
const destinationButton = document.querySelector('#destinationButton')
const tripDuration = document.querySelector('#tripDuration')
const continueButtonFour = document.querySelector('#continueButtonFour')
const destinationPicker = document.querySelector('#destinationPicker')


const startDate = datepicker('#modalCalendarOne', {
  id: 1,
})





const pageLoadDom = (currentTraveler, tripRepo) => {
  clearColumns()
  updateHeaderMessage(currentTraveler, tripRepo)
  populateColumns(tripRepo)
  populateFormSelect(tripRepo)
  MicroModal.init();
}

const updateHeaderMessage = (currentTraveler, tripRepo) => {
  headerMessage.innerHTML = `Welcome back ${currentTraveler.name}. <br> You've spent
  $${tripRepo.userTotalCost} total on trips.`
}

const populateColumns = (tripRepo) => {
  checkForPresentTrip(tripRepo)
  fillUpcomingColumn(tripRepo)
  fillPendingColumn(tripRepo)
  fillPastColumn(tripRepo)
}


const checkForPresentTrip = (tripRepo) => {
  if (tripRepo.presentTrips.length === 0) {
    headerButton.classList.add('hidden');
    presentTripWindow.innerHTML = `
      <article class="trip-card">
      <p>It seems we don't have any current trips logged for you, click the button below to get started!</p>
      <button class="add-new-trip-button" id="addNewTripButtonBody" data-micromodal-trigger="modal-1">Add New Trip</button>
      </article>`;

  } else {
    // console.log(tripRepo.presentTrips)
    presentTripWindow.innerHTML = ``
    tripRepo.presentTrips.forEach((trip) => {
      presentTripWindow.innerHTML += `
      <article class="trip-card">
        <div class = "trip-card-header">
        <h3>Destination: ${trip.destinationName}</h3>
        </div>
        <div style="background-image: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7) ), url(${trip.image}); background-size: cover" class ="trip-card-body">
          <p>Start Date: ${trip.startDate}</p>
          <p>End Date: ${trip.endDate}</p>
          <p>Travelers: ${trip.travelers}</p>
          <p>Status: ${trip.status}</p>
          <p>Total Cost: $${trip.totalCost}</p>
        </div>
      </article>
    `
    })
  }
}


const fillUpcomingColumn = (tripRepo) => {
  tripRepo.upcomingTrips.forEach((trip) => {
    upcomingColumn.innerHTML += `
<article class="trip-card">
      <div class = "trip-card-header">
      <h3>Destination: ${trip.destinationName}</h3>
      </div>
      <div style="background-image: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7) ), url(${trip.image}); background-size: cover;" class ="trip-card-body">
        <p>Start Date: ${trip.startDate}</p>
        <p>End Date: ${trip.endDate}</p>
        <p>Travelers: ${trip.travelers}</p>
        <p>Status: ${trip.status}</p>
        <p>Total Cost: $${trip.totalCost}</p>
      </div>
    </article>
    `
  })
}

const fillPendingColumn = (tripRepo) => {
  tripRepo.pendingTrips.forEach((trip) => {
    pendingColumn.innerHTML += `
    <article class="trip-card">
      <div class = "trip-card-header">
      <h3>Destination: ${trip.destinationName}</h3>
      </div>
    <div style="background-image: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7) ), url(${trip.image}); background-size: cover;" class ="trip-card-body">
        <p>Start Date: ${trip.startDate}</p>
        <p>End Date: ${trip.endDate}</p>
        <p>Travelers: ${trip.travelers}</p>
        <p>Status: ${trip.status}</p>
        <p>Total Cost: $${trip.totalCost}</p>
      </div>
    </article>
    `
  })
}

const fillPastColumn = (tripRepo) => {
  tripRepo.pastTrips.forEach((trip) => {
    pastColumn.innerHTML += `
    <article class="trip-card">
      <div class = "trip-card-header">
      <h3>Destination: ${trip.destinationName}</h3>
      </div>
      <div style="background-image: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7) ), url(${trip.image}); background-size: cover;" class ="trip-card-body">
        <p>Start Date: ${trip.startDate}</p>
        <p>End Date: ${trip.endDate}</p>
        <p>Travelers: ${trip.travelers}</p>
        <p>Status: ${trip.status}</p>
        <p>Total Cost: $${trip.totalCost}</p>
      </div>
    </article>
    `
  })
}

const populateFormSelect = (tripRepo) => {
  tripRepo.destinationNames.forEach((destination) => {
    destinationPicker.innerHTML += `<option value="${destination}">${destination}</option>`
  })
}


const randomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


const submitForm = (currentTraveler, tripRepo) => {
  // let startDate = dayjs(modalCalendarOne.value).format('YYYY/MM/DD')
  const tripData = {
    id: randomNum(250, 15000),
    userID: currentTraveler.id,
    destinationID: tripRepo.convertDestinationNameToID(destinationPicker.value),
    travelers: travelerNumber.value,
    date: dayjs(modalCalendarOne.value).format('YYYY/MM/DD'),
    duration: tripDuration.value,
    status: 'pending',
    suggestedActivities: [],
  }
  console.log(tripData)
  postTrip(tripData)
}

const showHide = (elementOne, elementTwo) => {
  elementOne.classList.add('hidden')
  elementTwo.classList.remove('hidden')
}

const clearColumns = () => {
  upcomingColumn.innerHTML = ``
  pendingColumn.innerHTML = ``
  pastColumn.innerHTML = ``
}

continueButtonOne.addEventListener('click', () => {
  showHide(modalWindowOne, modalWindowTwo);
})
continueButtonTwo.addEventListener('click', () => {
  showHide(modalWindowTwo, modalWindowThree)
})
continueButtonThree.addEventListener('click', () => {
  showHide(modalWindowThree, modalWindowFour)
})
continueButtonFour.addEventListener('click', () => {
  showHide(modalWindowFour, modalWindowFive)
})

// destinationButton.addEventListener('click', () => {
//   destinationContent.classList.toggle('show')
// })







export {
  pageLoadDom,
  submitForm
}
