import ServicesRegister from "../Services/servicesRegister.js";


const servicesRegister = new ServicesRegister()


const getRegister = async (req, res)=>{
  try {
    const get = await servicesRegister.ServicesGetRegister()
    res.status(200).json({Registers: get})
  } catch (error) {
    res.status(400).json({Error: error.message})
  }
}

// -----------------------------------------------------------------------------
const postRegister = async (req, res)=>{
  try {
    const {playerWhoSent, playerWhoReceived, balanceValue} = req.body
    if(!playerWhoSent || !playerWhoReceived || !balanceValue){
      throw new Error("Body required: playerWhoSent , playerWhoReceived and balancerValue!")
    }
    if(playerWhoSent == playerWhoReceived){
      throw new Error("playerWhoSent cannot to be to playerWhoReceived")
    }
    const body = {playerWhoSent, playerWhoReceived, balanceValue}
    const newRegister = await servicesRegister.ServicesPostRegister(body)
    res.status(200).json({Msg: "Operation Sucefull", RegsitePlayers: newRegister})
  } catch (error) {
    res.status(400).json({Error: error.message})
  }
}

// -------------------------------------------------------------------------------------------------

const deleteRegisterAll = async (req, res)=>{
  try {
    await servicesRegister.servicesDeleteAll()
    res.status(201).json()
  } catch (error) {
    res.status(400).json({Error: error.message})
  }
}


export { getRegister, postRegister,deleteRegisterAll}