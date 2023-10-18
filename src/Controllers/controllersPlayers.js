import ServicesPlayers from "../Services/servicesPlayer"
const services = new ServicesPlayers



const playersGet = async (req, res)=>{
  const get = services.servicesGetPlayers
  res.send(get)
}
const playersPost = async (req, res)=>{
  res.send('metodo post')
}

export  {playersGet, playersPost}