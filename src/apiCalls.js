// const fetchTravelers = fetch('http://localhost:3001/api/v1/travelers')
// const fetchTrips = fetch('http://localhost:3001/api/v1/trips')
// const fetchDestinations = fetch('http://localhost:3001/api/v1/destinations')
// const fetchSingleTraveler = fetch('http://localhost:3001/api/v1/travelers/2')

const fetchSingleTraveler = (num) => {
 return fetch(`http://localhost:3001/api/v1/travelers/${num}`)
   // .then(response => response.json())
   // .then(json => console.log(json))
}

const fetchTrips = () => {
  return fetch('http://localhost:3001/api/v1/trips')
  .then(response => response.json())
}

const fetchDestinations = () => {
  return fetch("http://localhost:3001/api/v1/destinations")
  .then(response => response.json())
}


module.exports = { fetchSingleTraveler, fetchTrips, fetchDestinations };
