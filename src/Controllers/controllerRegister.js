import ServicesRegister from "../Services/servicesRegister.js";

const servicesRegister = new ServicesRegister()

const postRegister = async (req, res)=>{
  const id = req.params.idPlayer
  await servicesRegister.ServicesPostREgister(id)
  res.send('teste')
}

export {postRegister}