const { Schema, model } = require('mongoose')

const User = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  dogs: [{
    type: Schema.Types.ObjectId,
    ref: 'dog'
  }]
})

module.exports = model('user', User)
