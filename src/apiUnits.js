const ApiUnits = {
  allUnits: [
    { id: 1, nombre: "Grammar"},
    { id: 2, nombre: "Listening"},
    { id: 3, nombre: "Phrasal Verbs"},
    { id: 4, nombre: "Writing"},
    { id: 5, nombre: "Reading"},
    { id: 6, nombre: "Pronouns"}
  ],
  all: function() { return this.allUnits},
  
  get: function(id) {
    const isUnit = p => p.id === id
    return this.allUnits.find(isUnit)
  }
}

export default ApiUnits
