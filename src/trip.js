class Trip {
  constructor(data){
    this.id = data.id,
    this.userID = data.userID,
    this.destinationID = data.destinationID,
    this.destinationName = undefined
    this.travelers = data.travelers,
    this.date = data.date,
    this.duration = data.duration,
    this.status = data.status,
    this.suggestedActivities = data.suggestedActivities
  }

  convertDestinationID(array) {
    const destinationResult = array.find((item) => {
      return item.id === this.destinationID
    })
    this.destinationName = destinationResult.destination
  }

}





export default Trip
