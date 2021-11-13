const fetchTravelers = fetch('http://localhost:3001/api/v1/travelers')
const fetchSingleTraveler = fetch('http://localhost:3001/api/v1/travelers/2')
const fetchTrips = fetch('http://localhost:3001/api/v1/trips')
const fetchDestinations = fetch('http://localhost:3001/api/v1/destinations')



module.exports = { fetchTravelers, fetchSingleTraveler, fetchTrips, fetchDestinations };