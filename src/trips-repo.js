import Trip from './trip'

// const today = '2020/06/13'

class TripsRepository {
  constructor(tripsData, destinationsData){
    this.rawData = tripsData.trips
    this.trips = []
    this.userTrips = []
    this.presentTrips = []
    this.upcomingTrips = []
    this.pendingTrips = []
    this.pastTrips = []
    this.userTotalCost = 0
    this.destinations = destinationsData.destinations
    this.destinationNames = []
  }

  createTrips(){
    const createdTrips = this.rawData.map((data) => {
      let newTrip = new Trip(data)
      newTrip.convertDestinationID(this.destinations)
      return newTrip
    })
    this.trips = createdTrips
  }

  findUserTrips(id){
    this.userTrips = this.trips.filter((data) => {
      return data.userID === id
    })
    return this.userTrips
  }

  sortUserTrips(date){
    this.userTrips.forEach((trip) => {
      if (trip.date < date && trip.status === 'approved') {
        this.pastTrips.push(trip)
      } else if (trip.date > date && trip.status === 'approved'){
        this.upcomingTrips.push(trip)
      } else if (trip.date === date && trip.status === 'approved'){
        this.presentTrips.push(trip)
      } else {
        this.pendingTrips.push(trip)
      }
    })
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
    this.userTotalCost = totalCost
    return totalCost

  }

  showDestinationNames(){
     this.destinationNames = this.destinations.map((destination) => {
      return destination.destination
    })
    return this.destinationNames
  }

}


export default TripsRepository
