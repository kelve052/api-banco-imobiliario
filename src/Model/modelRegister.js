import mongoose from "mongoose";
import {v4 as uuidv4} from 'uuid'

const modelRegistro = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4
  },
  PlayerWhoSent: {
    type: String,
  },
  playerWhoReceived: {
    type: String
  },
  BalnceValue: {
    type: Number
  }
})

export {modelRegistro}