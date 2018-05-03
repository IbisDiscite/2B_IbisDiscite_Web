const ApiTodayslessons = {
  allTodayslessons: [
      {
        "id": 1,
        "name": "A blessing in disguise",
        "description": "a good thing that seemed bad at first"
      },
      {
        "id": 2,
        "name": "A dime a dozen",
        "description": "Something common"
      },
      {
        "id": 3,
        "name": "Beat around the bush",
        "description": "Avoid saying what you mean, usually because it is uncomfortable"
      }
    ],
  all: function() { return this.allTodayslessons},
  get: function(id) {
    const isTodayslesson = p => p.id === id
    return this.allTodayslessons.find(isTodayslesson)
  }
}

export default ApiTodayslessons
