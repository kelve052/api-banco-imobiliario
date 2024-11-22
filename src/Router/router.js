import express from "express";

import { playersGet, playersPost, playerUpdate, deleteAllPlayers, PlayerDelete } from "../Controllers/controllersPlayers.js";
import auth from "../Controllers/contollerAuth.js";
import authentication from "../middleware/authentication.js";
import { getRegister, postRegister, deleteRegisterAll} from "../Controllers/controllerRegister.js";
import { getBank, postBank, putBank, deleteBank, deleteBankAll} from "../Controllers/constrollerBank.js";

//imports swagger
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import getSwaggerOptions from '../docs/config/head.js';

const router = express.Router()

router.route("/player").get(authentication, playersGet)
router.route("/player").post(playersPost)
router.route("/player/:id").put(authentication, playerUpdate).delete(authentication, PlayerDelete)
router.route("/deleteAllPlayers").delete(authentication, deleteAllPlayers)

router.route("/bank").get(authentication ,getBank)
router.route("/bank").post(authentication, postBank)
router.route("/bank/:id").put(authentication,putBank).delete(authentication, deleteBank)
router.route("/banksDeleteAll").delete(authentication, deleteBankAll)

router.route("/register").get(authentication, getRegister)
router.route("/register").post(authentication, postRegister)
router.route("/register").delete(authentication, deleteRegisterAll)

router.route("/auth").post(auth)
//update vercel

const routes = (app) => {
  // Configurando a documentação da Swagger UI para ser servida diretamente em '/'
  app.use("/", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(getSwaggerOptions()), {
    customCssUrl: [
        "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css"
      ],
      customJsUrl: [
        "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.js",
        "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.js"
      ],
    customSiteTitle: "Api", // Personalizando o título da página de documentação
}));}

export {router, routes};
