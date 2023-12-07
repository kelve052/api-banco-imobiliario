import express from "express";
import {playersGet, playersPost, playerUpdate, PlayerDelete, deleteAllPlayers} from "../Controllers/controllersPlayers.js";
import auth from "../Controllers/contollerAuth.js";
import authentication from "../middleware/authentication.js";
import { getRegister, postRegister, deleteRegisterAll} from "../Controllers/controllerRegister.js";
import { getBanco, postBanco, putBanco, deleteBanco, deleteBancoAll} from "../Controllers/constrollerBanco.js";

const router = express.Router()

router.route("/").get((req, res)=>{res.json({Msg: "Seja Bem vindo"})})
router.route("/players").get(authentication, playersGet)
router.route("/player").post(playersPost)
router.route("/player/:id").put(authentication, playerUpdate).delete(authentication, PlayerDelete)
router.route("/deleteAllPlayers").delete(authentication, deleteAllPlayers)

router.route("/bancos").get(authentication ,getBanco)
router.route("/banco").post(authentication, postBanco)
router.route("/banco/:id").put(authentication,putBanco).delete(authentication, deleteBanco)
router.route("/bancosDeleteAll").delete(authentication, deleteBancoAll)

router.route("/register").get(authentication, getRegister)
router.route("/register").post(authentication, postRegister)
router.route("/register").delete(authentication, deleteRegisterAll)

router.route("/auth").post(auth)

export default router;