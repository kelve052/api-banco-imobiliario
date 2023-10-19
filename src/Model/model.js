import mongoose from "mongoose";
import {v4 as uuidv4} from 'uuid'

const modelPlayers = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4
  },
  name: {
    type: String,
    required: [true, "Campo name esta vasio, insira um nome!"],
    unique: [true, 'Campo nome tem que ser unico ja existe um player co um nome existe!'],
    trim: true
  },
  tean: {
    type: String,
    enun: ['Amarelo', 'Azul', 'Branco', 'Preto', 'Vermelho']
  },
  saldo: {
    type: Number
  }
})

export default mongoose.model('Player', modelPlayers);