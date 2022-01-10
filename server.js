require('mongoose').connect('mongodb://localhost:27017/animals_db')

const { Schema, model } = require('mongoose')

const DogSchema = new Schema({
  name: String,
  age: Number,
  breed: String
})

const Dog = model('dog', DogSchema)

Dog.create({
  name: 'Bear',
  age: 6,
  breed: 'Cockapoo',
  bark: 'Woof woof!'
})
  .then(dog => console.log(dog))
  .catch(err => console.log(err))
