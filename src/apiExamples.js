const ApiExamples = {
  allExamples: [
      {
        "id": 25,
        "unit_id": 1,
        "contenido": "Example number 0 of Grammar unit!"
      },
      {
        "id": 26,
        "unit_id": 1,
        "contenido": "Example number 1 of Grammar unit!"
      },
      {
        "id": 27,
        "unit_id": 1,
        "contenido": "Example number 2 of Grammar unit!"
      },
      {
        "id": 28,
        "unit_id": 1,
        "contenido": "Example number 3 of Grammar unit!"
      },
      {
        "id": 29,
        "unit_id": 2,
        "contenido": "Example number 0 of Listening unit!"
      },
      {
        "id": 30,
        "unit_id": 2,
        "contenido": "Example number 1 of Listening unit!"
      },
      {
        "id": 31,
        "unit_id": 2,
        "contenido": "Example number 2 of Listening unit!"
      },
      {
        "id": 32,
        "unit_id": 2,
        "contenido": "Example number 3 of Listening unit!"
      },
      {
        "id": 33,
        "unit_id": 3,
        "contenido": "Example number 0 of Phrasal Verbs unit!"
      },
      {
        "id": 34,
        "unit_id": 3,
        "contenido": "Example number 1 of Phrasal Verbs unit!"
      },
      {
        "id": 35,
        "unit_id": 3,
        "contenido": "Example number 2 of Phrasal Verbs unit!"
      },
      {
        "id": 36,
        "unit_id": 3,
        "contenido": "Example number 3 of Phrasal Verbs unit!"
      },
      {
        "id": 37,
        "unit_id": 4,
        "contenido": "Example number 0 of Writing unit!"
      },
      {
        "id": 38,
        "unit_id": 4,
        "contenido": "Example number 1 of Writing unit!"
      },
      {
        "id": 39,
        "unit_id": 4,
        "contenido": "Example number 2 of Writing unit!"
      },
      {
        "id": 40,
        "unit_id": 4,
        "contenido": "Example number 3 of Writing unit!"
      },
      {
        "id": 41,
        "unit_id": 5,
        "contenido": "Example number 0 of Reading unit!"
      },
      {
        "id": 42,
        "unit_id": 5,
        "contenido": "Example number 1 of Reading unit!"
      },
      {
        "id": 43,
        "unit_id": 5,
        "contenido": "Example number 2 of Reading unit!"
      },
      {
        "id": 44,
        "unit_id": 5,
        "contenido": "Example number 3 of Reading unit!"
      },
      {
        "id": 45,
        "unit_id": 6,
        "contenido": "Example number 0 of Pronouns unit!"
      },
      {
        "id": 46,
        "unit_id": 6,
        "contenido": "Example number 1 of Pronouns unit!"
      },
      {
        "id": 47,
        "unit_id": 6,
        "contenido": "Example number 2 of Pronouns unit!"
      },
      {
        "id": 48,
        "unit_id": 6,
        "contenido": "Example number 3 of Pronouns unit!"
      }
  ],
  all: function() { return this.allExamples},
  get: function(id) {
    const isExample = p => p.id === id
    return this.allExamples.find(isExample)
  },
  getUnits: function(unit_id) {
    const isExample = p => p.unit_id === unit_id
    return this.allExamples.find(isExample)
  }
}

export default ApiExamples
