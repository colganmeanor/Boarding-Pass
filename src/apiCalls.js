const fetchSingleTraveler = (num) => {
 return fetch(`http://localhost:3001/api/v1/travelers/${num}`)
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
