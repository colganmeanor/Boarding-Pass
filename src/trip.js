class Trip {
  constructor(data){
    this.id = data.id,
    this.userID = data.userID,
    this.destinationID = data.destinationID,
    this.destinationName = undefined,
    this.travelers = data.travelers,
    this.date = data.date,
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

  calculateTotalCost(array){
    const destinationResult = array.find((item) => {
      return item.id === this.destinationID
    })
    let tripCost = (destinationResult.estimatedLodgingCostPerDay +
      destinationResult.estimatedFlightCostPerPerson) * this.travelers
    let agentFee = tripCost / 10
    this.totalCost = tripCost + agentFee
}


}


export default Trip
