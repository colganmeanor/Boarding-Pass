class Trip {
  constructor(data){
    this.id = data.id,
    this.userID = data.userID,
    this.destinationID = data.destinationID,
    this.travelers = data.travelers,
    this.data = data.date,
    this.duration = data.duration,
    this.status = data.status,
    this.suggestedActivities = data.suggestedActivities
  }

  // findUserTrips(userID) {
  //
  // }

}





module.exports = Trip
