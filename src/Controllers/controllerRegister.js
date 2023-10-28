import ServicesRegister from "../Services/servicesRegister.js";

const servicesRegister = new ServicesRegister()

const postRegister = async (req, res)=>{
  try {
    const id = req.params.idPlayer
    const {status, player, balancerValue} = req.body
    if(!status || !player || !balancerValue){
      throw new Error("Body required: status (received or sent), player and balancerValue!")
    }
    if(status != "sent"){
      throw new Error("property estatus required sent!")
    }
    const body = {status, player, balancerValue}
    const newRegister = await servicesRegister.ServicesPostREgister(id, body)
    res.status(200).json({Msg: "Operation Sucefull", RegsitePlayers: newRegister})
  } catch (error) {
    res.status(400).json({Error: error.message})
  }
}

export {postRegister}