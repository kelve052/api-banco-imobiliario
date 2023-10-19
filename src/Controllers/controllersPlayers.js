import ServicesPlayers from "../Services/servicesPlayer.js"
const services = new ServicesPlayers()



const playersGet = async (req, res)=>{
  const get = await services.servicesGetPlayers()
  res.status(200).json({Msg: 'Rota get', Players: get})
}
const playersPost = async (req, res)=>{
  res.send('metodo post')
}

export  {playersGet, playersPost}