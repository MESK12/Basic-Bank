const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const transactionSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  balance: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  accNo: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
});
const customerSchema = new Schema ({
transactions: [transactionSchema],
  balance: {
  type: Number,
  required: [true, "Please provide a valid balance"],
  default: 0,
  min: 0,
  }
})

const Customer = mongoose.model('Post', transactionSchema);
module.exports= Customer;