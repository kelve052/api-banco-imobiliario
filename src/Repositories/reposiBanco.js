import modelBanco from "../Model/modelBanco.js"
import modelRegister from "../Model/modelRegister.js";

class UserRepositoryBanco{
  async repositorieGetBanco (){
    try {
      return await modelBanco.find()
    } catch (error) {
      throw error;
    }
  }
  async repositoriePostBanco (body){
    try {
      const nameBancoExist = await modelBanco.findOne({name: body.name})
      if(nameBancoExist){
        throw new Error(`Name: ${nameBancoExist.name} already belongs to another banco!`)
      }
      if(body.balancer < 0){
        throw new Error("The balancer cannot be less than 0")
      }
      return await modelBanco.create(body)
    } catch (error) {
      throw error;
    }
  }
  async repositoriePutBanco (id, body){
    try {
      const banco = await modelBanco.findById(id)
      if(!banco){
        throw new Error("id inserted cannot exits!")
      }
      const nameBancoExits = await modelBanco.findOne({name: body.name})
      if(nameBancoExits){
        if(banco.name != body.name){
          throw new Error("Name inserted already belong to another banco!")
        }
      }
      if(body.balancer < 0){
        throw new Error("the balancer cannot be less than 0!")
      }
      if(body.name != banco.name){
        await modelRegister.updateMany({playerWhoSent: banco.name},  {playerWhoSent: body.name})
        await modelRegister.updateMany({playerWhoReceived: banco.name}, {playerWhoReceived: body.name})
        return await modelBanco.findByIdAndUpdate(id, body, {new: true})
      }else{
        return await modelBanco.findByIdAndUpdate(id, body, {new: true})
      }
    } catch (error) {
      throw error;
    }
  }
  async repositorieDeleteBanco(id){
    try {
      const banco = await modelBanco.findById(id)
      if(!banco){
        throw new Error("id inserted cannot exits!")
      }
      await modelBanco.findByIdAndDelete(id)
    } catch (error) {
      throw error;
    }
  }
  async repositorieDeleteBancoAll(){
    await modelBanco.deleteMany()
  }
}

export default UserRepositoryBanco;