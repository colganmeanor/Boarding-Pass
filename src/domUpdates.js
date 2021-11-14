import dayjs from 'dayjs';
// console.log(currentTraveler)

// Query Selectors

const headerMessage = document.querySelector('#splashMessage')
const presentColumn = document.querySelector('#presentColumn')
const upcomingColumn = document.querySelector('#upcomingColumn')
const pendingColumn = document.querySelector('#pendingColumn')
const pastColumn = document.querySelector('#pastColumn')
const presentTripWindow = document.querySelector('#presentTripWindow')
const headerButton = document.querySelector('#addNewTripButton')
const bodyButton = document.querySelector('#addNewTripButtonBody')


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
  checkForPresentTrip(tripRepo)
  // console.log(tripRepo)
  fillUpcomingColumn(tripRepo)
  fillPendingColumn(tripRepo)
  fillPastColumn(tripRepo)
}


const checkForPresentTrip = (tripRepo) => {
    if (tripRepo.presentTrips.length === 0) {
      headerButton.classList.add('hidden');
      presentTripWindow.innerHTML = `
      <article class="trip-card">
      <p>There ain't no trips at the moment - maybe consider adding one now?</p>
      <button class="add-new-trip-button" id="addNewTripButtonBody">Add New Trip</button>
      </article>`;

    } else {
      console.log(tripRepo.presentTrips)
      presentTripWindow.innerHTML = ``
      tripRepo.presentTrips.forEach((trip) => {
          presentTripWindow.innerHTML += `<article class="trip-card">
            <p>Start Date: ${trip.startDate}</p>
            <p>End Date: ${trip.endDate}</p>
            <p>Destination: ${trip.destinationName}</p>
            <p>Travelers: ${trip.travelers}</p>
            <p>Status: ${trip.status}</p>
            <p>Total Cost: $${trip.totalCost}</p>
          </article>
    `
  })
      }
    }


    // const fillPresentColumn = (tripRepo) => {
    //   tripRepo.presentTrips.forEach((trip) => {
    //     presentColumn.innerHTML += `
    //     <article class="trip-card">
    //       <p>Date: ${trip.date}</p>
    //       <p>Duration: ${trip.duration}</p>
    //       <p>Destination: ${trip.destinationName}</p>
    //       <p>Travelers: ${trip.travelers}</p>
    //       <p>Status: ${trip.status}</p>
    //       <p>Total Cost: $${trip.totalCost}</p>
    //     </article>
    //     `
    //   })
    // }

    const fillUpcomingColumn = (tripRepo) => {
      tripRepo.upcomingTrips.forEach((trip) => {
        upcomingColumn.innerHTML += `
        <article class="trip-card">
          <p>Start Date: ${trip.startDate}</p>
          <p>End Date: ${trip.endDate}</p>
          <p>Destination: ${trip.destinationName}</p>
          <p>Travelers: ${trip.travelers}</p>
          <p>Status: ${trip.status}</p>
          <p>Total Cost: $${trip.totalCost}</p>
        </article>
    `
      })
    }

    const fillPendingColumn = (tripRepo) => {
      tripRepo.pendingTrips.forEach((trip) => {
        pendingColumn.innerHTML += `
    <article class="trip-card">
      <p>Start Date: ${trip.startDate}</p>
      <p>End Date: ${trip.endDate}</p>
      <p>Destination: ${trip.destinationName}</p>
      <p>Travelers: ${trip.travelers}</p>
      <p>Status: ${trip.status}</p>
      <p>Total Cost: $${trip.totalCost}</p>
    </article>
    `
      })
    }

    const fillPastColumn = (tripRepo) => {
      tripRepo.pastTrips.forEach((trip) => {
        pastColumn.innerHTML += `
        <article class="trip-card">
          <p>Start Date: ${trip.startDate}</p>
          <p>End Date: ${trip.endDate}</p>
          <p>Destination: ${trip.destinationName}</p>
          <p>Travelers: ${trip.travelers}</p>
          <p>Status: ${trip.status}</p>
          <p>Total Cost: $${trip.totalCost}</p>
        </article>
    `
      })
    }


    export default pageLoadDom
