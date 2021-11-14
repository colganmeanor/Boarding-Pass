// import { currentTraveler, today } from './scripts'
// console.log(currentTraveler)

// Query Selectors

const headerMessage = document.querySelector('#splashMessage')
const presentColumn = document.querySelector('#presentColumn')
const upcomingColumn = document.querySelector('#upcomingColumn')
const pendingColumn = document.querySelector('#pendingColumn')
const pastColumn = document.querySelector('#pastColumn')


const pageLoadDom = (currentTraveler, tripRepo) => {
  updateHeaderMessage(currentTraveler, tripRepo)
  console.log(tripRepo)
  populateColumns(tripRepo)
}

const updateHeaderMessage = (currentTraveler, tripRepo) => {
  headerMessage.innerHTML = `Welcome back ${currentTraveler.name}. <br> You've spent
  $${tripRepo.userTotalCost} total on trips.`
}

const populateColumns = (tripRepo) => {
  fillPresentColumn(tripRepo)
  fillUpcomingColumn(tripRepo)
  fillPendingColumn(tripRepo)
  fillPastColumn(tripRepo)
}


const fillPresentColumn = (tripRepo) => {
  tripRepo.presentTrips.forEach((trip) => {
    presentColumn.innerHTML += `
    <article class="trip-card">
      <p>Date: ${trip.date}</p>
      <p>Duration: ${trip.duration}</p>
      <p>Destination: ${trip.destinationName}</p>
      <p>Travelers: ${trip.travelers}</p>
      <p>Status: ${trip.status}</p>
    </article>
    `
  })
}

const fillUpcomingColumn = (tripRepo) => {
  tripRepo.upcomingTrips.forEach((trip) => {
    upcomingColumn.innerHTML += `
    <article class="trip-card">
      <p>Date: ${trip.date}</p>
      <p>Duration: ${trip.duration}</p>
      <p>Destination: ${trip.destinationName}</p>
      <p>Travelers: ${trip.travelers}</p>
      <p>Status: ${trip.status}</p>
    </article>
    `
  })
}

const fillPendingColumn = (tripRepo) => {
  tripRepo.pendingTrips.forEach((trip) => {
    pendingColumn.innerHTML += `
    <article class="trip-card">
      <p>Date: ${trip.date}</p>
      <p>Duration: ${trip.duration}</p>
      <p>Destination: ${trip.destinationName}</p>
      <p>Travelers: ${trip.travelers}</p>
      <p>Status: ${trip.status}</p>
    </article>
    `
  })
}

const fillPastColumn = (tripRepo) => {
  tripRepo.pastTrips.forEach((trip) => {
    pastColumn.innerHTML += `
    <article class="trip-card">
      <p>Date: ${trip.date}</p>
      <p>Duration: ${trip.duration}</p>
      <p>Destination: ${trip.destinationName}</p>
      <p>Travelers: ${trip.travelers}</p>
      <p>Status: ${trip.status}</p>
    </article>
    `
  })
}


export default pageLoadDom
