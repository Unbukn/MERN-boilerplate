const mongoose = require('mongoose')
const Schema = mongoose.Schema
// **** EXAMPLE SCHEMA
const dataSchema = new Schema({
  someString: { type: String, required: true },
  someNumber: { type: Number, required: false },
  someBuffer: { type: Buffer, data: [1, 2, 3], required: false },
  someBoolean: { type: Boolean, required: false },
  someArray: { type: Array, required: false },
  date: { type: Date, default: Date.now }
})

const SomeData = mongoose.model('SomeData', dataSchema)

module.exports = SomeData

// For additional guidance visit. . . 
// https://mongoosejs.com/docs/schematypes.html
