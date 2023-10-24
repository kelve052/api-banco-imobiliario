import mongoose from "mongoose";
import {v4 as uuidv4} from 'uuid'

const modelRegistro = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4
  },
  status: {
    type: String,
    enum: ["received", "sent"]
  },
  player: {
    type: String
  },
  balancerValue: {
    type: Number
  }
})

export {modelRegistro}