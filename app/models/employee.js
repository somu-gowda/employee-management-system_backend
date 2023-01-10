const mongoose = require("mongoose");

const employee = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: false,
  },
  role: {
    type: String,
    require: false,
  },
  salary: {
    type: Number,
    require: false,
  },
  dob: {
    type: String,
    require: false,
  },
  age: {
    type: Number,
    require: false,
  },
  password: {
    type: String,
    require: false,
  },
  address: {
    type: String,
    require: false,
  },
});

module.exports = mongoose.model("employee", employee);
