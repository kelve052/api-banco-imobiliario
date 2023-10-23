import express from "express";
import {playersGet, playersPost} from "../Controllers/controllersPlayers.js";
import auth from "../Controllers/contollerAuth.js";
import authentication from "../middleware/authentication.js";

const router = express.Router()

router.route("/").get((req, res)=>{res.json({Msg: "Seja Bem vindo"})})
router.route("/players").get(authentication, playersGet)
router.route("/player").post(playersPost)
router.route("/auth").post(auth)

export default router;