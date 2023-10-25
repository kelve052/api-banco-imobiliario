import mongoose from "mongoose";
import {v4 as uuidv4} from 'uuid'
import { modelRegistro } from "./modelRegister.js";

const modelBanco = new mongoose.Schema({
  _id: {
    type:  String,
    default: uuidv4
  },
  name: {
    type: String,
    default: "Banco-Dlatles"
  },
  balancer:{
    type: Number,
    default: 0
  },
  register: {
    type: [modelRegistro],
    default: null
  }
})

export default mongoose.model("Banco", modelBanco);