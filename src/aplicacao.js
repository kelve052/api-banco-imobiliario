import express from "express";
import dotenv from 'dotenv'
import router from './Router/routerPlayers.js'
import { start } from "./sever.js";

dotenv.config()

const aplicacao = express()
export  default aplicacao

aplicacao.use(express.json())
aplicacao.use('/', router)


start()