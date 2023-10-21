// import { Jwt } from "jsonwebtoken.js";
import ServicesAuth from "../Services/servicesAuth.js"

const auth = async (req, res)=>{
  try {
    const {name, password} = req.body
    await new ServicesAuth().servValidadeCredentials(name, password)
    res.json({Msg: 'Authentication sucefull!'})
  } catch (error) {
    res.json({Error: error.message})
  }
}

export default auth