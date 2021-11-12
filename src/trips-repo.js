import Trip from './trip'

class TripsRepository {
  constructor(tripData, detinationsData){
    this.rawData = tripData
    this.trips = []
    this.userTrips = []
    this.destinations = destinationsData
  }

  createTrips(){
    this.trips = this.rawData.map((data) => {
      return new Trip(data)
    })
    return this.trips
  }

  findUserTrips(id){
    this.userTrips = this.trips.filter((data) => {
      return data.userID === id
    })
    return this.userTrips
  }

  // totalTripCostPerUser(id){
  //   const totalCost = this.userTrips.reduce((sum, trip) => {
  //     return sum += trip.
  //   }, 0)
  //   return totalCost
  // }

  showDestinations(){
    const destinationNames = this.destinations.map((destination) => {
      return destination.destination
    })
    return destinationNames
  }

}


export default TripsRepository
