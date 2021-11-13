// import { currentTraveler, today } from './scripts'
// console.log(currentTraveler)

// Query Selectors

const headerMessage = document.querySelector('#splashMessage')


const pageLoadDom = (currentTraveler) => {
  updateHeaderMessage(currentTraveler)
  console.log(currentTraveler)
}

const updateHeaderMessage = (currentTraveler) => {
  headerMessage.innerText = `Welcome back ${currentTraveler.name}`
}




export default pageLoadDom
