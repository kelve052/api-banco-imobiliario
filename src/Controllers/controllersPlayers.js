import ServicesPlayers from "../Services/servicesPlayer.js"
const services = new ServicesPlayers()

const playersGet = async (req, res)=>{
  const get = await services.servicesGetPlayers()
  res.status(200).json({Players: get})
}
//-----------------------------------------------------------------------------------------------------
const playersPost = async (req, res)=>{
 try {
   const {name, tean, password} = req.body
   const body = {name, tean, password}
   if(!name || !tean || !password){
     res.status(400).json({Error: "body incorret, name, tean and password required!"})
     return;// return vazio é nessesario para não dar erro de ao tentar executar o proximo res.json
   }
   if(name.startsWith("Banco") || name.startsWith("banco")){
    throw new Error("Name cannot startWhith Banco")
   }
  if(password.length < 8){
    res.status(400).json({Error:"The password required minimum 8 caracters!"})
    return;
  }
  const regex = /^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[0-9]).{8,}$/
  const passwordregex = regex.test(password)
  if(!passwordregex){
    res.status(400).json({Error: "Mandatory password symbol, a number and capital latter!"})
    return;
  }
  const newPlayer = await services.servicesPostPlayers(body)
  res.status(200).json(newPlayer)
  
 } catch (error) {
  res.status(400).json({Error: error.message})
 }
}
//-----------------------------------------------------------------------------------------------------

const playerUpdate = async (req, res)=>{
  const id = req.params.id
  const {name, tean, balancer, password} = req.body
  const body = {name, tean, balancer, password}
  if(!name || !tean || !balancer || !password){
    res.status(400).json({Error: "imcomplete body, required name, tean, balancer and password"})
    return;
  }
  if(password.length < 8){
    res.status(400).json({Error:"The password required minimum 8 caracters!"})
    return;
  }
  const regex = /^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[0-9]).{8,}$/
  const passwordregex = regex.test(password)
  if(!passwordregex){
    res.status(400).json({Error: "Mandatory password symbol, a number and capital latter!"})
    return;
  }
  if(tean != "Yellow" && tean != "Blue" && tean != "White" && tean != "Black" && tean != "Red" && tean != "Green"){
    res.status(400).json({Error: "value of tean invalid, required: Yellow or Blue or White or Black or Red or Green"})
    return;
  }
 try {
    const newPlayer = await services.servicesPutPlayer(id, body)
    res.status(200).json({Player: newPlayer})
 } catch (error) {
   res.status(400).json({Error: error.message})
 }
}
//-----------------------------------------------------------------------------------------------------

const PlayerDelete = async (req, res)=>{
  try {
    const id = req.params.id
    await services.servicesDeletePlayers(id)
    res.status(201).json()
  } catch (error) {
    res.status(400).json({Error: error.message})
  }
}
//-----------------------------------------------------------------------------------------------------

const deleteAllPlayers = async (res, req)=>{
  try {
    await services.servicesDeleteAllPlayers()
    res.status(201).json()
  } catch (error) {
    res.status(400).json({Error: error.message})
  }
}

export  {playersGet, playersPost, playerUpdate, PlayerDelete, deleteAllPlayers}