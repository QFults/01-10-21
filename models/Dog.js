const { Schema, model } = require('mongoose')

const DogSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  breed: {
    type: String,
    required: true
  }
})

module.exports = model('dog', DogSchema)
