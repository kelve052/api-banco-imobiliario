import express from "express";
import {playersGet, playersPost} from "../Controllers/controllersPlayers.js";

const router = express.Router()

router.route("/players").get(playersGet)

export default router;