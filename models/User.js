const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  xp: {
    type: Number,
    required: true,
    default: 0
  },
  level: {
    type: Number,
    required: true,
    default: 0
  },
  played: {
    type: Number,
    required: true,
    default: 0
  },
  wins: {
    type: Number,
    required: true,
    default: 0
  },
  losses: {
    type: Number,
    required: true,
    default: 0
  },
  skill: {
    type: Number,
    required: true,
    default: 1000
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", UserSchema);
