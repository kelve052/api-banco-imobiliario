import ServicesRegister from "../Services/servicesRegister.js";

const servicesRegister = new ServicesRegister()

const postRegister = async (req, res)=>{
  try {
    const {playerWhoSent, playerWhoReceived, balanceValue} = req.body
    if(!playerWhoSent || !playerWhoReceived || !balanceValue){
      throw new Error("Body required: playerWhoSent , playerWhoReceived and balancerValue!")
    }
    const body = {playerWhoSent, playerWhoSent, playerWhoSent}
    const newRegister = await servicesRegister.ServicesPostRegister(1, body)
    res.status(200).json({Msg: "Operation Sucefull", RegsitePlayers: newRegister})
  } catch (error) {
    res.status(400).json({Error: error.message})
  }
}

export {postRegister}