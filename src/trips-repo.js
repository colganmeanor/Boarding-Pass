import Trip from './trip'

class TripsRepository {
  constructor(tripsData, destinationsData){
    this.rawData = tripsData.trips
    this.trips = []
    this.userTrips = []
    this.destinations = destinationsData
    this.destinationNames = []
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

  totalTripCostPerUser(){
    const totalCost = this.userTrips.reduce((sum, trip) => {
      let destinationCost = this.destinations.reduce((sum, destination) => {
        if (trip.destinationID === destination.id){
          let totalTripCost = destination.estimatedLodgingCostPerDay +
          destination.estimatedFlightCostPerPerson;
          let agentFee = totalTripCost / 10;
          sum += (totalTripCost + agentFee)
        }
        return sum
      }, 0)
      return sum += destinationCost
    }, 0)
    return Math.round(totalCost)
  }

  showDestinationNames(){
     this.destinationNames = this.destinations.map((destination) => {
      return destination.destination
    })
    return this.destinationNames
  }

}


export default TripsRepository
