import Trip from './trip'
import dayjs from 'dayjs';
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)


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
      newTrip.siphonDestinationData(this.destinations)
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

  // sortUserTrips(date){
  //   this.userTrips.forEach((trip) => {
  //     if (trip.startDate < date && trip.status === 'approved') {
  //       this.pastTrips.push(trip)
  //     } else if (trip.startDate > date && trip.status === 'approved'){
  //       this.upcomingTrips.push(trip)
  //     } else if (trip.startDate === date && trip.status === 'approved'){
  //       this.presentTrips.push(trip)
  //     } else {
  //       this.pendingTrips.push(trip)
  //     }
  //   })
  // }

  sortUserTrips(today){
    console.log(dayjs(today) > dayjs('12/19/2019'))
    this.userTrips.forEach((trip) => {
      if (trip.status === 'approved') {
        if (dayjs(trip.startDate) < dayjs(today) && dayjs(trip.endDate) < dayjs(today)){
          this.pastTrips.push(trip)
        } else if (dayjs(trip.startDate) > dayjs(today)){
          this.upcomingTrips.push(trip)
        } else {
          this.presentTrips.push(trip)
        }
      } else {
        this.pendingTrips.push(trip)
      }
    })
  }


  totalTripCostPerUser(){
    const totalCost = this.userTrips.reduce((sum, trip) => {
      return sum += trip.totalCost
    }, 0)
    this.userTotalCost = totalCost
  }

  showDestinationNames(){
     this.destinationNames = this.destinations.map((destination) => {
      return destination.destination
    })
    return this.destinationNames
  }

}


export default TripsRepository
