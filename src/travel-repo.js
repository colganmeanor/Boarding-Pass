import Traveler from '/src/traveler'

class Travelers = {
  constructor(data){
    this.repository = data;
    this.users = []
  }

  createTraveler(){
    this.repository.forEach((person) => {
      const traveler = new Traveler(person.id, person.name, person.travelerType)
    })
  }

}
