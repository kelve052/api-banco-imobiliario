import ServicesRegister from "../Services/servicesRegister.js";

const servicesRegister = new ServicesRegister()

const postRegister = async (req, res)=>{
  try {
    const id = req.params.idPlayer
    const {status, player, balancerValue} = req.body
    if(!status || !player || !balancerValue){
      throw new Error("Body required: status (sent), player and balancerValue!")
    }
    if(status != "sent"){
      throw new Error("property estatus required sent!")
    }
    const body = {status, player, balancerValue}
    const newRegister = await servicesRegister.ServicesPostRegister(id, body)
    res.status(200).json({Msg: "Operation Sucefull", RegsitePlayers: newRegister})
  } catch (error) {
    res.status(400).json({Error: error.message})
  }
}
//-----------------------------------------------------------------------------------------------------

const postRegisterBanco = async (req, res)=>{
  try {
    const id = req.params.idBanco
    const {status, player, balancerValue} = req.body
    if(!status || !player || !balancerValue){
      throw new Error("Body required: status (sent, or received), player and balancerValue!")
    }
    if(status != "sent" && status != "received"){
      throw new Error("property estatus required sent or received!")
    }
    const body = {status, player, balancerValue}
    const newRegisterBanco = await servicesRegister.ServicesPostRegisterBanco(id, body)
    res.status(200).json({Msg: "Operation Sucefull", RegisterBanco: newRegisterBanco})
  } catch (error) {
    res.status(400).json({Error: error.message})
  }
}

export {postRegister, postRegisterBanco}