import express from "express";
import {playersGet, playersPost, playerUpdate, PlayerDelete, deleteAllPlayers} from "../Controllers/controllersPlayers.js";
import auth from "../Controllers/contollerAuth.js";
import authentication from "../middleware/authentication.js";
import { postRegister } from "../Controllers/controllerRegister.js";

const router = express.Router()

router.route("/").get((req, res)=>{res.json({Msg: "Seja Bem vindo"})})
router.route("/players").get(authentication, playersGet)
router.route("/player").post(playersPost)
router.route("/player/:id").put(authentication, playerUpdate).delete(authentication, PlayerDelete)
router.route("/deleteAllPlayers").delete(authentication, deleteAllPlayers)
router.route("/auth").post(auth)

router.route("/register/:idPlayer").post(authentication, postRegister)

export default router;