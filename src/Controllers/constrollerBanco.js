import ServicesBanco from "../Services/servicesBanco.js";

const servicesBanco = new ServicesBanco()

const getBanco = async (req, res)=>{
  try {
    const banco = await servicesBanco.servicesBancoGet()
    res.status(200).json({Banco: banco})
  } catch (error) {
    res.status(400).json({Error: error.message})
  }
}

//-----------------------------------------------------------------------------------------------------

const postBanco = async(req, res)=>{
  try {
    let {name,  balancer} = req.body
    if(!name || !balancer){
      throw new Error("Body required: name and balancer")
    }
    name = `$B: ${name}`
    const body = {name,  balancer}
    const post = await servicesBanco.servicesBancoPost(body)
    res.status(200).json({Banco: post})
  } catch (error) {
    res.status(400).json({Error: error.message})
  }
}
//-----------------------------------------------------------------------------------------------------
const putBanco = async (req, res)=>{
  try {
    const id = req.params.id
    let {name, balancer} = req.body
    if(!name || !balancer){
      throw new Error("Body required: name and balancer")
    }
    name = `$B: ${name}`
    const body = {name,  balancer}
    const newBanco = await servicesBanco.servicesBancoPut(id, body)
    res.status(200).json({Banco: newBanco})
  } catch (error) {
    res.status(400).json({Error: error.message})
  }
}
//-----------------------------------------------------------------------------------------------------

const deleteBanco = async (req, res)=>{
  try {
    const id = req.params.id
    await servicesBanco.servicesDelete(id)
    res.status(201).json()
  } catch (error) {
    res.status(400).json({Error: error.message})
  }
}
//-----------------------------------------------------------------------------------------------------

const deleteBancoAll = async (req, res)=>{
  try {
    await servicesBanco.servicesDeleteAll()
    res.status(201).json()
  } catch (error) {
    res.status(400).json({Error: error.message})
  }
}

export {getBanco, postBanco, putBanco, deleteBanco, deleteBancoAll}