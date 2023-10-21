import express from "express";
import {playersGet, playersPost} from "../Controllers/controllersPlayers.js";
import auth from "../Controllers/contollerAuth.js";

const router = express.Router()

router.route("/").get((req, res)=>{res.json({Msg: "Seja Bem vindo"})})
router.route("/players").get(playersGet)
router.route("/auth").post(auth)

export default router;