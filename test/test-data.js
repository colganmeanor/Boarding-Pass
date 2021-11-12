const travelers = [
  {
    id: 1,
    name: "Ham Leadbeater",
    travelerType: "relaxer"
  },
  {
    id: 2,
    name: "Rachael Vaughten",
    travelerType: "thrill-seeker"
  },
  {
    id: 3,
    name: "Sibby Dawidowitsch",
    travelerType: "shopper"
  },
  {
    id: 4,
    name: "Leila Thebeaud",
    travelerType: "photographer"
  },
  {
    id: 5,
    name: "Tiffy Grout",
    travelerType: "thrill-seeker"
  },
  {
    id: 6,
    name: "Laverna Flawith",
    travelerType: "shopper"
  },
  {
    id: 7,
    name: "Emmet Sandham",
    travelerType: "relaxer"
  },
  {
    id: 8,
    name: "Carlin O'Reilly",
    travelerType: "history buff"
  },
  {
    id: 9,
    name: "Natalee Deegin",
    travelerType: "relaxer"
  },
  {
    id: 10,
    name: "Rickie Jodlowski",
    travelerType: "relaxer"
  }
]

const trips = [
  {
    id: 3,
    userID: 3,
    destinationID: 22,
    travelers: 4,
    date: '2022/05/22',
    duration: 17,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 10,
    userID: 9,
    destinationID: 50,
    travelers: 6,
    date: '2022/07/23',
    duration: 17,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 33,
    userID: 6,
    destinationID: 36,
    travelers: 5,
    date: '2020/03/26',
    duration: 19,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 41,
    userID: 3,
    destinationID: 25,
    travelers: 3,
    date: '2020/08/30',
    duration: 11,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 50,
    userID: 3,
    destinationID: 16,
    travelers: 5,
    date: '2020/07/02',
    duration: 17,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 65,
    userID: 3,
    destinationID: 35,
    travelers: 4,
    date: '2020/03/21',
    duration: 18,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 74,
    userID: 9,
    destinationID: 31,
    travelers: 5,
    date: '2020/03/05',
    duration: 13,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 76,
    userID: 7,
    destinationID: 17,
    travelers: 5,
    date: '2019/10/22',
    duration: 20,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 77,
    userID: 7,
    destinationID: 46,
    travelers: 5,
    date: '2020/05/28',
    duration: 17,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 81,
    userID: 10,
    destinationID: 26,
    travelers: 1,
    date: '2020/08/31',
    duration: 16,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 84,
    userID: 7,
    destinationID: 1,
    travelers: 1,
    date: '2020/11/23',
    duration: 19,
    status: 'pending',
    suggestedActivities: []
  },
  {
    id: 89,
    userID: 2,
    destinationID: 10,
    travelers: 5,
    date: '2019/09/27',
    duration: 13,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 91,
    userID: 5,
    destinationID: 5,
    travelers: 1,
    date: '2020/04/29',
    duration: 16,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 95,
    userID: 9,
    destinationID: 16,
    travelers: 4,
    date: '2020/05/29',
    duration: 16,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 97,
    userID: 7,
    destinationID: 3,
    travelers: 3,
    date: '2020/08/20',
    duration: 4,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 98,
    userID: 7,
    destinationID: 12,
    travelers: 6,
    date: '2020/10/6',
    duration: 16,
    status: 'pending',
    suggestedActivities: []
  },
  {
    id: 100,
    userID: 2,
    destinationID: 6,
    travelers: 6,
    date: '2020/3/28',
    duration: 10,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 102,
    userID: 3,
    destinationID: 3,
    travelers: 3,
    date: '2020/09/26',
    duration: 8,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 103,
    userID: 5,
    destinationID: 35,
    travelers: 2,
    date: '2020/10/19',
    duration: 20,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 105,
    userID: 9,
    destinationID: 14,
    travelers: 2,
    date: '2019/08/09',
    duration: 10,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 106,
    userID: 9,
    destinationID: 34,
    travelers: 5,
    date: '2020/06/08',
    duration: 17,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 107,
    userID: 8,
    destinationID: 19,
    travelers: 3,
    date: '2020/06/02',
    duration: 6,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 116,
    userID: 2,
    destinationID: 7,
    travelers: 3,
    date: '2020/04/03',
    duration: 8,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 117,
    userID: 1,
    destinationID: 28,
    travelers: 3,
    date: '2021/01/09',
    duration: 15,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 119,
    userID: 10,
    destinationID: 47,
    travelers: 5,
    date: '2020/05/28',
    duration: 20,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 121,
    userID: 3,
    destinationID: 44,
    travelers: 2,
    date: '2020/03/11',
    duration: 13,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 123,
    userID: 7,
    destinationID: 16,
    travelers: 6,
    date: '2020/05/03',
    duration: 10,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 126,
    userID: 8,
    destinationID: 26,
    travelers: 5,
    date: '2020/07/23',
    duration: 20,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 143,
    userID: 8,
    destinationID: 7,
    travelers: 3,
    date: '2020/02/25',
    duration: 12,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 145,
    userID: 7,
    destinationID: 31,
    travelers: 6,
    date: '2020/04/01/',
    duration: 13,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 147,
    userID: 8,
    destinationID: 6,
    travelers: 4,
    date: '2019/09/18',
    duration: 18,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 163,
    userID: 5,
    destinationID: 48,
    travelers: 1,
    date: '2020/04/28',
    duration: 10,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 166,
    userID: 2,
    destinationID: 7,
    travelers: 2,
    date: '2020/03/05',
    duration: 6,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 171,
    userID: 2,
    destinationID: 43,
    travelers: 1,
    date: '2020/12/27',
    duration: 18,
    status: 'pending',
    suggestedActivities: []
  },
  {
    id: 173,
    userID: 3,
    destinationID: 9,
    travelers: 6,
    date: '2020/04/21',
    duration: 18,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 177,
    userID: 2,
    destinationID: 20,
    travelers: 6,
    date: '2020/01/29',
    duration: 8,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 182,
    userID: 9,
    destinationID: 45,
    travelers: 6,
    date: '2021/01/15',
    duration: 5,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 185,
    userID: 10,
    destinationID: 35,
    travelers: 4,
    date: '2019/09/02',
    duration: 16,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 186,
    userID: 4,
    destinationID: 44,
    travelers: 6,
    date: '2020/02/08',
    duration: 6,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 190,
    userID: 8,
    destinationID: 9,
    travelers: 5,
    date: '2019/09/13',
    duration: 5,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 191,
    userID: 6,
    destinationID: 47,
    travelers: 5,
    date: '2019/08/17',
    duration: 19,
    status: 'approved',
    suggestedActivities: []
  },
  {
    id: 196,
    userID: 5,
    destinationID: 16,
    travelers: 1,
    date: '2020/09/25',
    duration: 8,
    status: 'approved',
    suggestedActivities: []
  }
]

module.exports = {travelers, trips}
