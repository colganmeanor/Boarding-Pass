// import { currentTraveler, today } from './scripts'
// console.log(currentTraveler)

// Query Selectors

const headerMessage = document.querySelector('#splashMessage')


const pageLoadDom = (currentTraveler, tripRepo) => {
  updateHeaderMessage(currentTraveler, tripRepo)
  console.log(tripRepo)
}

const updateHeaderMessage = (currentTraveler, tripRepo) => {
  headerMessage.innerHTML = `Welcome back ${currentTraveler.name}. <br> You've spent
  $${tripRepo.userTotalCost} total on trips.`
}

const populateColumns = (tripRepo) => {
  console.log(tripRepo)
}



export default pageLoadDom
