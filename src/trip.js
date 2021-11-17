import dayjs from 'dayjs';

class Trip {
  constructor(data) {
    this.id = data.id,
      this.userID = data.userID,
      this.destinationID = data.destinationID,
      this.destinationName = undefined,
      this.image = undefined,
      this.imageAlt = undefined,
      this.travelers = data.travelers,
      this.startDate = dayjs(data.date).format('MM/DD/YYYY'),
      this.duration = data.duration,
      this.endDate = undefined,
      this.status = data.status,
      this.suggestedActivities = data.suggestedActivities
    this.totalCost = 0
  }

  convertDestinationID(array) {
    const destinationResult = array.find((item) => {
      return item.id === this.destinationID
    })
    this.destinationName = destinationResult.destination
  }

  calculateTotalCost(array) {
    const destinationResult = array.find((item) => {
      return item.id === this.destinationID
    })
    let lodgingCost = ((destinationResult.estimatedLodgingCostPerDay * this.duration) * this.travelers)
    let flightCost = destinationResult.estimatedFlightCostPerPerson * this.travelers
    let tripCost = lodgingCost + flightCost
    let agentFee = tripCost / 10
    this.totalCost = tripCost + agentFee
  }

  grabDestinationImages(array) {
    const destinationResult = array.find((item) => {
      return item.id === this.destinationID
    })
    this.imageAlt = destinationResult.alt;
    this.image = destinationResult.image;
  }

  calculateEndDate() {
    this.endDate = dayjs(this.startDate).add(this.duration, 'days').format('MM/DD/YYYY')
  }

  siphonDestinationData(array) {
    this.convertDestinationID(array)
    this.calculateTotalCost(array)
    this.grabDestinationImages(array)
    this.calculateEndDate()
  }



}


export default Trip
